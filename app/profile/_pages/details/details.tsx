import { UserLoginData } from "@/app/user";
import Image from "next/image";

import DefaultUser from '../../../../imgs/defaultUser.png';

export default function Details({data, ip}:{data:UserLoginData, ip:string}) {
    return (<>
        <h1 className="font-bold mb-3 text-3xl">My details</h1>
        <hr className="border-black" />

        <div className="mt-8 w-[90%] flex gap-8">
            <div className="w-[30%] h-auto border-2">
                <Image src={data.avatar === '' ? DefaultUser : `http://${ip}/api/files/_pb_users_auth_/${data.id}/${data.avatar}`} alt="logo" width={500} height={500} />
            </div>
            <div className="">
                <h2>Name: {data.name}</h2>
                <h2>Email: {data.email}</h2>
            </div>
        </div>
    </>)
}