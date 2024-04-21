'use client';
import { useEffect, useState } from "react";
import { User, UserLoginData } from "../user"

export default function Profile() {
    const [UserData, setUserData] = useState<UserLoginData>({});

    useEffect(() => {
        if (Object.keys(User).length > 0) 
            setUserData(User);
    }, [])

    console.log(UserData)
    return(<>
        <h1 className="m-10 mb-0 font-bold text-2xl">My Account</h1>
        <div className="m-10 flex">
            <div className="w-[20%]">COAO</div>
            <div className="w-[80%]">WDD</div>
        </div>
    </>)
}