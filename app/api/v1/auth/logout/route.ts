import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function POST() {
    const cookiesStore = await cookies();

    cookiesStore.delete('pb_auth');
    
    return NextResponse.json({});
}