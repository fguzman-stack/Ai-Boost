import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  // Aquí iría la llamada real a Stability AI, pero por ahora es un placeholder
  return NextResponse.json({ result: `Imagen generada (simulada) para: ${prompt}` });
} 