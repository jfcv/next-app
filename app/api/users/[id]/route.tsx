import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: number;
    }
}

export function GET(request: NextRequestst, { params: {id} }: Props) {
    if(id > 10)
        return NextResponse.json({ error: 'User not found'}, { status: 404});

    return NextResponse.json({ id: Number(id), name: 'Mosh'});
}
