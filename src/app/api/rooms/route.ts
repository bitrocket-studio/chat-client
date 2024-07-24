import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch("http://localhost:8080/api/rooms", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
