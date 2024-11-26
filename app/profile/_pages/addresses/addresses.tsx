import { UserLoginData } from "@/app/user";
import { useEffect, useState } from "react";
import AddressForm from "./form";
import Loading from "@/app/_components/loading/loading";


export default function Addresses({data}:{data: UserLoginData}) {
    const [ addresses, setAddresses ] = useState<Array<any>>();
    const [ addMode, setAddMode ] = useState(false);
    const [ confirm, setConfirm ] = useState(false);
    const [ menuClass, setMenuClass ] = useState(true);
    const [currentAddr, setCurrentAddr ] = useState<string>();
 
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
                console.log("ERROR while retrieving addresses");
            else
                setAddresses(result);
        }
        getOrders();
    },[data.id])

    const newAddress = (data:object) => {
        if (addresses)
            setAddresses([...addresses, data])
    }

    const deleteAddress = async () => {
        const response = await fetch('/api/v1/addresses/removeaddress', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: currentAddr})
        });

        const result = await response.json();
    
        if (!response.ok) 
            console.log("ERROR during the request");


        if (addresses) // remove the item
            for (let i = 0; i < addresses.length; i++) 
                if (addresses[i].id == currentAddr)
                        addresses.splice(i, 1);

        setCurrentAddr(undefined); // reset selected address' id
        disableConfirmMode();
    }

    const disableConfirmMode = () => {
        setCurrentAddr(undefined);
        setMenuClass(false);
        setTimeout(() => setConfirm(false), 100);
    }

    const disableAddMenu = ( ) => {
        setMenuClass(false);
        setTimeout(() => setAddMode(false), 100);
    }

    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My Addresses</h1>
        <hr className="border-black" />

        <Loading value={addresses} /> 
        <div className="grid grid-cols-5 place-items-center mx-16 my-10 gap-y-8 gap-x-3">
            {addresses?.map(e => 
                <div key={e.id} className="w-[100%] border-2 border-gray-400 hover:border-black duration-200 rounded-md p-4">
                    <div className="">
                        <p>{e.address}</p>
                        <p>{e.phone}</p>
                        <p>{e.name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm tracking-wider mt-2 underline font-bold hover:cursor-pointer s">Edit</p>
                        <p className="text-sm tracking-wider mt-2 underline font-bold hover:cursor-pointer s" onClick={() => {setConfirm(true);setMenuClass(true); setCurrentAddr(e.id);}}>Remove</p>
                    </div>
                </div>
            )}
            
        </div>

        <hr className="border-black" />
        <div className="w-full flex justify-center my-5">
            <button onClick={() => {setAddMode(true); setMenuClass(true);}} className="bg-black text-white p-3 border-2 border-black font-bold hover:text-black hover:bg-white duration-300">ADD ADDRESS</button>
        </div>

        {confirm && 
        <>
            <div onClick={disableConfirmMode} className={"fixed w-full h-full top-0 left-0 bg-gray-400/50 duration-300 z-10 " + (menuClass ? "animate-bg" : "animate-bg-out")}></div>
            <div className="bg-white rounded-md m-auto w-[30%] z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 shadow-xl flex flex-col">
                <div className="flex flex-col content-center pb-4">
                    <h1 className="font-bold text-2xl">Delete Address?</h1>
                    <h2>Do you want to delete this address?</h2>
                </div>
                <button onClick={deleteAddress}  className="bg-black mt-4 text-white p-3 border-4 border-black font-bold hover:text-black hover:bg-white duration-300">YES</button>
                <button onClick={disableConfirmMode} className="bg-black mt-4 text-white p-3 border-4 border-black font-bold hover:text-black hover:bg-white duration-300">NOPE</button>
            </div>
        </>}

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