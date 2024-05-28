import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: number;
    }
}

export async function GET(request: NextRequest, { params: {id} }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })

    if(!user)
        return NextResponse.json({ error: 'User not found'}, { status: 404});

    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: {id} }: Props) {
    const body = await request.json();
    // bad request, 400
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    // user not found, 404
    if(id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404});

    // update the user
    return NextResponse.json({ id: Number(id), name: body.name});
}

export async function DELETE(request: NextRequest, { params: {id} }: Props) {
        // user not found, 404
        if(id > 10)
            return NextResponse.json({ error: 'User not found'}, { status: 404});

        // delete the user from the db, in a real scenario

        return NextResponse.json({});
}