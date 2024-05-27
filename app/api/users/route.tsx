import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) { // to prevent caching you have to add this request to the endpoint
    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'John'},
    ]);
}