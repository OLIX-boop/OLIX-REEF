import db from "@/app/auth/_auth/dbUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {password, newpass, email} = await request.json();
        console.log(password, newpass, email)
        const result = await db.changeUserPassword(email, password, newpass);
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