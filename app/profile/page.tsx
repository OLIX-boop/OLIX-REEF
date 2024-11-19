'use client';
import { useEffect, useState } from "react";
import { User, UserLoginData } from "../user";
import Details from "./_pages/details/details";
import Addresses from "./_pages/addresses/addresses";
import Orders from "./_pages/orders/orders";
import { useRouter } from "next/navigation";
import { updateData } from "@/app/_components/nav/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMapPin, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";


export default function Profile() {
    const [UserData, setUserData] = useState<UserLoginData>();
    const [page, setPage] = useState<string>('details'); // default page when opening
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await User.getLogin();
            setUserData(data);
        };
        getData();
    }, [])

    const disconnectUser = async () => {
        updateData(null);
        await fetch('/api/v1/auth/logout', { method: 'POST', headers: {'Content-Type': 'application/json'}});
        router.push('/');
    }

    return(<div className="bg-[#F5F6F8] p-12 mb-[-4vh]">
        <h1 className="mb-4 font-bold text-2xl">My Account</h1>
        <div className="flex gap-6">
            <div className="w-[15%]">

                <button 
                    onClick={() => setPage('details')}
                    className={`text-left pl-4 text-black duration-300 font-bold w-full rounded-[4px] py-1 border-2 ${page === 'details' ? " border-black" : "hover:bg-black hover:text-white border-[#F5F6F8]"}`}
                ><FontAwesomeIcon icon={faUser} className="mr-2" />My details</button>

                <button
                    onClick={() => setPage('orders')}
                    className={`text-left pl-4 mt-3 text-black duration-300 font-bold w-full rounded-[4px] py-1 border-2 ${page === 'orders' ? " border-black" : "hover:bg-black hover:text-white border-[#F5F6F8]"}`}
                ><FontAwesomeIcon icon={faBagShopping} className="mr-2" />My Orders</button>

                <button 
                    onClick={() => setPage('settings')}
                    className={`text-left pl-4 mt-3 text-black duration-300 font-bold w-full rounded-[4px] py-1 border-2 ${page === 'settings' ? " border-black" : "hover:bg-black hover:text-white border-[#F5F6F8]"}`}
                ><FontAwesomeIcon icon={faMapPin} className="mr-2" />My Addres</button>

                <button 
                    onClick={disconnectUser}
                    className={`text-left pl-4 mt-3 text-black duration-300 font-bold w-full rounded-[4px] py-1 border-2 hover:bg-black hover:text-white border-[#F5F6F8]`}
                ><FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />Logout</button>


            </div>
            <div className="w-[85%] bg-white rounded-md px-10 py-8 shadow-md">
                { page === "details" && UserData && <Details data={UserData} /> }
                { page === "orders" && UserData && <Orders data={UserData}/> }
                { page === "settings" && <Addresses/> }
            </div>
        </div>
    </div>)
}