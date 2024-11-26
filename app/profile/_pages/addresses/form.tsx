import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AddressForm({disableAddMenu, newAddress ,menuClass, addrParam, nameParam, phoneParam, id}: {disableAddMenu: () => void, newAddress: (data: object) => void, menuClass:boolean, addrParam: string, nameParam:string, phoneParam:string, id:string}) {
    const [address, setAddress] = useState(addrParam);
    const [name, setName] = useState(nameParam);
    const [phone, setPhone] = useState(phoneParam);
    const [error, setError] = useState("");


    const sumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/v1/addresses/sendaddress', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({address, name, phone, id})
            });
    
            const data = await response.json();
            console.log(data);
            if (!response.ok) 
                return setError(data.replaceAll('"', ''));
            
            newAddress(data);
            disableAddMenu();
                
        } catch (err) {
            console.log(err);
            setError("Error");
        }
    }

    return (<>
        <div onClick={disableAddMenu} className={"fixed w-full h-full top-0 left-0 bg-gray-400/50 duration-300 z-10 " + (menuClass ? "animate-bg" : "animate-bg-out")}></div>
            <form onSubmit={sumbit} className="bg-white rounded-md m-auto w-[30%] z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 shadow-lg flex flex-col">
                <div className="flex justify-between pb-4">
                    <h1 className="font-bold text-2xl">Add New Address</h1>
                    <div className="flex">
                      <FontAwesomeIcon onClick={disableAddMenu} className="hover:cursor-pointer my-auto" icon={faX} />
                    </div>
                </div>

                {error.length > 0 && <p className=" text-red-600 border-2 border-red-600 rounded-md p-2 bg-red-200 w-full m-auto text-sm">&nbsp;{error}</p>}
                <h1 className="text-lg mb-1">Address</h1>
                <input required className="px-2 w-full outline-none border-2 rounded-sm mr-auto py-1 text-md border-gray-600 hover:border-black duration-200" id="address" type="text" value={address} onChange={e => setAddress(e.target.value || '')} />
                <h1 className="text-lg mb-1">Name</h1>
                <input required className="px-2 w-full outline-none border-2 rounded-sm mr-auto py-1 text-md border-gray-600 hover:border-black duration-200" id="name" type="text" value={name} onChange={e => setName(e.target.value || '')} />
                <h1 className="text-lg mb-1">Phone number</h1>
                <input required className="px-2 w-full outline-none border-2 rounded-sm mr-auto py-1 text-md border-gray-600 hover:border-black duration-200" id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value || '')} />
                
                <button className="bg-black mt-4 text-white p-3 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">ADD</button>
            </form>
    </>)
}