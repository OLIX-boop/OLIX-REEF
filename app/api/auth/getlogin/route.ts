import db from "@/app/auth/_auth/dbUser";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const cookiesStore = cookies();
        const response = await db.getUser(cookiesStore);
        return NextResponse.json(response);
    } catch (err: any) {
        return NextResponse.json(
            JSON.stringify(err.message || err.toString()),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}