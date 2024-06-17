import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24;
export const COOKIE_NAME = "MyWebSiteToken"
export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;
  if (email !== "nooshifard@gmail.com") {
    return NextResponse.json(
      {
        message: "UnAuthorized!",
      },
      {
        status: 401,
      }
    );
  }
  const secret = process.env.JWT_SECRET || "";
  const token = sign(
    {
      email,
    },
    secret,
    {
          expiresIn: MAX_AGE,
    }
  );

  const serialized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.MODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });
  const response = { message: "Authenticated!" };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Set-Cookie": serialized,
    },
  });
}
