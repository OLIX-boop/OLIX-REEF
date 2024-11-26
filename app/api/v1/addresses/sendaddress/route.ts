import db from "@/app/auth/_auth/dbUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {address, name, phone, id} = await request.json();
        const result = await db.setNewAddress(address, name, phone, id);
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