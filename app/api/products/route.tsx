import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 2.5 },
        { id: 2, name: 'Bread', price: 3.5 },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation= schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    /**
     * you can use the spread operator like this 
     * { id: #, ...body }
     * but a malicious user could send more properties
     * than required so it's best to destructured desired
     * props and send back just the ones required
     */
    const { name, price } = body;
    return NextResponse.json({id: 3, name, price }, { status: 201 });
}