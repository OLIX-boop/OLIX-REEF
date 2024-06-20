import db from "@/app/auth/_auth/dbUser";
import { rejects } from "assert";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, name, id } = await request.json();
        const result = await db.setUserInfo(id, {
            'name': name,
            'email': email
        });
        console.log(result)
        return NextResponse.json(result);
    } catch (err: any) {
        console.log(err.message)
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