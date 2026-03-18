interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    // Todo lo demás: servir archivos estáticos
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  const headers = { 'Content-Type': 'application/json' };

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false }, { status: 400, headers });
  }

  const { nombre, empresa, telefono, mensaje } = body;
  if (!nombre || !telefono) {
    return Response.json({ success: false, error: 'Faltan campos requeridos' }, { status: 400, headers });
  }

  const emailText = [
    `Nombre:   ${nombre}`,
    `Empresa:  ${empresa || '-'}`,
    `Teléfono: ${telefono}`,
    `Mensaje:  ${mensaje || '-'}`,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Web C&A Rosario <onboarding@resend.dev>',
      to: ['Clavosyalambres_rosario@hotmail.com'],
      subject: `Nueva consulta de ${nombre}`,
      text: `Nueva consulta desde la web:\n\n${emailText}`,
    }),
  });

  if (res.ok) {
    return Response.json({ success: true }, { headers });
  }

  console.error('Resend error:', await res.text());
  return Response.json({ success: false }, { status: 500, headers });
}
