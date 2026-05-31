import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  //Demo Credential
  if (email === "admin@gmail.com" && password === "admin") {
    const response = NextResponse.json({
      message: "Login Successful",
    });

    //set cokkies
    response.cookies.set("auth_token", "token");

    return response;
  }

  return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
}
