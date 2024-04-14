'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { updateData } from "@/app/_components/nav/navbar";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
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
        }
    };

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
    
    if (!isClient) return <div></div>;
  

    return (<>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-[30%] mt-[10vh] m-auto border-2 border-black justify-center align-middle py-9">

            <h1 className="text-2xl font-bold mx-auto">Login to my account</h1>
            
            <p className="ml-[15%] mb-[-1vh]">{error}</p>
            <label className="ml-[15%] mb-[-1vh]" htmlFor="email">Email</label>
            <input required className="border-2 w-[70%] mx-auto py-1 text-md hover:border-black duration-200" type="email" id="email" value={email} onChange={e => setEmail(e.target.value || '')} />
            
            <label className="ml-[15%] mb-[-1vh]" htmlFor="password">Password</label>
            <input required className="border-2 w-[70%] mx-auto py-1 text-md hover:border-black duration-200" id="password" type="password" value={password} onChange={e => setPassword(e.target.value || '')} />
            
            <button type="submit" className="mx-auto bg-black text-white py-2 w-[70%] border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Login</button>
            
            <p onClick={() => router.push('/auth/passwordreset?email='+email)} className="mx-auto underline underline-offset-4 cursor-pointer">Recover my password</p>
        </form>

        <div className="flex flex-col gap-4 w-[30%] mt-[5vh] mb-[10vh] m-auto border-2 justify-center align-middle py-9 hover:border-black duration-300">
            <h1 className="text-2xl font-bold mx-auto">New to OLIX Reef?</h1>
            <p className="mx-auto w-[70%] text-center">By registering at our shop, you will make more expedite the checkout process, you can add multiple shipping addresses, view and track your orders, and more.</p>
            <button onClick={() => router.push('/auth/register')} className="mx-auto bg-black text-white py-2 w-[70%] border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Sign Up</button>
        </div>
    
    
    </>)
}
