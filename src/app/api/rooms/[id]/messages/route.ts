import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/rooms/${params.id}/messages`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
