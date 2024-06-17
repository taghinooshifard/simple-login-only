import Cookies from "universal-cookie";
import { COOKIE_NAME } from "../login/route";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
export async function GET(request: Request) {
  const cookie = cookies()
  const token = cookie.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json(
      {
        message: "UnAuthorized!",
      },
      {
        status: 401,
      }
    );
  }
  const { value } = token;
  try {
    const secret = process.env.JWT_SECRET || "";
    verify(value, secret);
    const response = { user: "Super User" };
    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Something was wrong!",
      },
      {
        status: 400,
      }
    );
  }
}
