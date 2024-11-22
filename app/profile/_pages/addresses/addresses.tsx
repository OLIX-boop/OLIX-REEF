import { UserLoginData } from "@/app/user";
import { faX, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


export default function Addresses({data}:{data:UserLoginData}) {
    const [ addresses, setAddresses ] = useState();
    const [ addMode, setAddMode ] = useState(false);
    useEffect(()=>{
        const getOrders = async () => {
            const id = data.id;
            const response = await fetch('/api/v1/addresses/getaddresses', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id})
            });
    
            const result = await response.json();
    
            if (!response.ok) 
                console.log("ERROR while retrieving orders");
            else
                setAddresses(result);
        }
        getOrders();
    },[data.id])

    console.log(addresses);

    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My Addresses</h1>
        <hr className="border-black" />

        <div className="grid place-items-center mx-16 my-10 gap-y-8">
            <div className="max-w-56 border-2 border-black rounded-md p-5">
                <FontAwesomeIcon className="relative -top-3 left-[95%] hover:cursor-pointer" icon={faX} />
                <div className="-mt-6">
                    <p>Via Pietro Mascagni, 4, Mi, 20073</p>
                    <p>3395294449</p>
                    <p>Andrea</p>
                </div>
            <p className="text-sm tracking-wider -mb-2 mt-2 underline font-bold hover:cursor-pointer s">Edit</p>
            </div>
        </div>

        <hr className="border-black" />
        <div className="w-full flex justify-center my-5">
            <button className="bg-black text-white p-3 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">ADD ADDRESS</button>
        </div>
        {addMode && 
            <div className="absolute w-full h-full bg-black top-0 left-0">
                <div className="">CIAO</div>
            </div>
        }
    </>)
}