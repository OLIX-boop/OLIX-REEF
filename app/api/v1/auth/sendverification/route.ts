import db from "@/app/auth/_auth/dbUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const result = await db.requestVerification(email);
        return NextResponse.json(result);
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: "Something went wrong" }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}