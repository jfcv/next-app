import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// to prevent caching you have to add this request to the endpoint
export async function GET(request: NextRequest) { 

    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const { name, email } = body;

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(user)
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const createdUser = await prisma.user.create({
        data: {
            name,
            email
        }
    })

    return NextResponse.json(createdUser, { status: 201 });
}