/* EJEMPLO DE GET
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}
*/
/*
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  fetch('https://api.fooddy.cl/providers/authenticate');
  res.status(200).json({ name: 'José Miguel Carrera Verdugo'});
};
*/