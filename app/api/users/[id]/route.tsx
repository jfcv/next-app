import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: number;
    }
}

export function GET(request: NextRequest, { params: {id} }: Props) {
    if(id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404});

    return NextResponse.json({ id: Number(id), name: 'Mosh'});
}

export async function PUT(request: NextRequest, { params: {id} }: Props) {
    const body = await request.json();
    // bad request, 400
    if(!body.name)
        return NextResponse.json({error: 'Name is required'}, {status: 400});

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