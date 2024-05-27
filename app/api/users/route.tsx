import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) { // to prevent caching you have to add this request to the endpoint
    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'John'},
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    if(!body.name)
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })

    return NextResponse.json({id: 4, ...body}, { status: 201 });
}