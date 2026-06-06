import { generateToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  //Demo Credential
  if (email === "admin@gmail.com" && password === "admin") {
    const token = generateToken({ email });
    const response = NextResponse.json({
      message: "Login Successful",
      token,
    });
    return response;
  }

  return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
}
