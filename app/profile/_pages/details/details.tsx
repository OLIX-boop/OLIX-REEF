import { UserLoginData } from "@/app/user";
import { useEffect, useState } from "react";

export default function Details({data}:{data:UserLoginData}) {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [error, setError] = useState('');

    useEffect(()=>{
        if (data.email)
            setEmail(data.email);
        if (data.name)
            setName(data.name);
    },[data]);

    const [password, setPassword] = useState<string>("");
    const [newpass, setNewpass] = useState<string>("");
    const [newpassConfirm, setNewpassConfirm] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /*try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });

            const data = await response.json();
            if (!response.ok) 
                return setError(data.replaceAll('"', ''));


            if (data?.token) {
                updateData(data);
                router.push('/');
            }
            
        } catch (err) {
            setEmail('error');
        }*/
    }
    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My details</h1>
        <hr className="border-black" />

        <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-5 justify-center align-middle w-[70%] mx-auto">
            <p className="mb-[-1vh]">{error}</p>
            <label className="mb-[-1vh] text-lg" htmlFor="name">Name</label>
            <input required className="px-2 outline-none border-2 py-1 text-md border-gray-600 hover:border-black duration-200" type="name" id="name" defaultValue={name} value={name} onChange={e => setName(e.target.value || '')} />
            
            <label className="mb-[-1vh] text-lg" htmlFor="email">Email</label>
            <input required className="px-2 outline-none border-2 py-1 text-md border-gray-600 hover:border-black duration-200" id="email" type="email" defaultValue={email} value={email} onChange={e => setEmail(e.target.value || '')} />
            
            <button type="submit" className="bg-black text-white py-2 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Save changes</button>
        </form>

        <h1 className="font-bold mb-3 text-3xl flex justify-center mt-8">Change Password</h1>
        <hr className="border-black" />

        <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-5 justify-center align-middle w-[70%] mx-auto">
            <p className="mb-[-1vh]">{error}</p>
            <label className="mb-[-1vh] text-lg" htmlFor="password">Current Password</label>
            <input required className="px-2 outline-none border-2 py-1 text-md border-gray-600 hover:border-black duration-200" type="password" id="password" value={password} onChange={e => setPassword(e.target.value || '')} />
            
            <label className="mb-[-1vh] text-lg" htmlFor="newpass">New Password</label>
            <input required className="px-2 outline-none border-2 py-1 text-md border-gray-600 hover:border-black duration-200" id="newpass" type="password" value={newpass} onChange={e => setNewpass(e.target.value || '')} />

            <label className="mb-[-1vh] text-lg" htmlFor="newpassconfirm">Confirm New Password</label>
            <input required className="px-2 outline-none border-2 py-1 text-md border-gray-600 hover:border-black duration-200" id="newpassconfirm" type="password" value={newpassConfirm} onChange={e => setNewpassConfirm(e.target.value || '')} />
            
            <button type="submit" className="bg-black text-white py-2 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Change Password</button>
        </form>
    </>)
}