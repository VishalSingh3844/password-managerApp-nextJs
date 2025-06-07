import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;
  // check if same email id exist or not
  const emailExistOrNot = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (emailExistOrNot) {
    return NextResponse.json(
      {
        error: "User alredy exist",
      },
      {
        status: 400,
      }
    );
  }

  const salt = bcrypt.genSaltSync(10);
  const passwordhash = bcrypt.hashSync(password, salt);

  // if email not exist create the user
  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: passwordhash,
    },
  });

  return NextResponse.json({
    data: newUser,
  });
}
