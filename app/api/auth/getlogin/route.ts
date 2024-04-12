import db from "@/app/auth/_auth/dbUser";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const cookiesStore = cookies();
        const id = await db.isAuthenticated(cookiesStore);

        if (!id) 
            return NextResponse.json(
                JSON.stringify("No login found."),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )


        const response = await db.getUser(id);

        if (!response.verified) 
            return NextResponse.json(
                JSON.stringify("Account not verified."),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )


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