import { UserLoginData } from "@/app/user";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AddressForm from "./form";


export default function Addresses({data}:{data:UserLoginData}) {
    const [ addresses, setAddresses ] = useState<Array<any>>();
    const [ addMode, setAddMode ] = useState(false);
    const [ menuClass, setMenuClass ] = useState(true);

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

    const disableAddMenu = ( ) => {
        setMenuClass(false)
        setTimeout(() => setAddMode(false), 100);
    }

    const newAddress = (data:object) => {
        if (addresses)
            setAddresses([...addresses, data])
    }

    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My Addresses</h1>
        <hr className="border-black" />

        <div className="grid grid-cols-5 place-items-center mx-16 my-10 gap-y-8 gap-x-3">
            {addresses?.map(e => 
                <div key={e.id} className="w-[100%] border-2 border-black rounded-md p-4">
                    <div className="">
                        <p>{e.address}</p>
                        <p>{e.phone}</p>
                        <p>{e.name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm tracking-wider mt-2 underline font-bold hover:cursor-pointer s">Edit</p>
                        <p className="text-sm tracking-wider mt-2 underline font-bold hover:cursor-pointer s">Remove</p>
                    </div>
                </div>
            )}
            
        </div>

        <hr className="border-black" />
        <div className="w-full flex justify-center my-5">
            <button onClick={() => {setAddMode(true); setMenuClass(true);}} className="bg-black text-white p-3 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">ADD ADDRESS</button>
        </div>

        {addMode && data.id && 
            <AddressForm 
                disableAddMenu={disableAddMenu}
                newAddress = {newAddress}
                menuClass={menuClass}
                id={data.id}
                addrParam="" 
                nameParam=""
                phoneParam=""
            />}
    </>)
}