'use client';

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [error, setError] = useState('');
    
    
    const [pswMatch, setPswMatch] = useState(true);
    const [pswLength, setPswLength] = useState(true);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== passwordConfirm) return setError("Passwords doesn't match!");

        try {
            const name = firstName.trim() + " " + lastName.trim();
            const form = {name, email, password};
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            });
            console.log(response)
            if (!response.ok) {
                setError('Failed to register user');
                return;
            };
            const data = await response.json();
            console.log(data);
        } catch (err) {
            setEmail('error');
        }
    }

    const handlePswMatch = (value:string) => {
        setPasswordConfirm(value || '');
        setPswMatch(password===value || passwordConfirm.length === 0 || password.length === 0);
    }
    const handlePswLength = (e:React.FormEvent<HTMLInputElement>) => {
        setPswLength((e.target.value.length >= 8 || e.target.value.length === 0));
        setPswMatch(passwordConfirm===e.target.value || passwordConfirm.length === 0 || password.length === 0);
    }


    return (<>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[30%] mt-[10vh] m-auto border-2 border-black justify-center align-middle py-9">
            <h1 className="text-2xl font-bold mx-auto">Register</h1>

            <p className="ml-[15%] mb-[-1vh]">{error}</p>

            <div className="grid grid-cols-2 w-[70%] mx-auto ">
                <div>
                    <label className="mb-[-1vh]" htmlFor="name">First Name</label>
                    <input required className="border-2 mx-auto py-1 w-[90%] text-md hover:border-black duration-200" type="text" value={firstName} onChange={e => setFirstName(e.target.value || '')} id="name" />
                </div>

                <div>
                    <label className="mb-[-1vh]" htmlFor="name">Last Name</label>
                    <input required className="border-2 mx-auto w-[100%] py-1 text-md hover:border-black duration-200" type="text" value={lastName} onChange={e => setLastName(e.target.value || '')} id="lastname" />
                </div>
            </div>

            <label className="ml-[15%] mb-[-1vh]" htmlFor="email">Email</label>
            <input required className="border-2 w-[70%] mx-auto py-1 text-md hover:border-black duration-200" type="email" value={email} onChange={e => setEmail(e.target.value || '')}  id="email" />

            <label className="ml-[15%] mb-[-1vh]" htmlFor="password">Password</label>
            <input required minLength={8} onInput={e => handlePswLength(e)} className={"border-2 w-[70%] mx-auto py-1 text-md hover:border-black duration-200 "+(pswLength ? "" : "border-red-500 focus:outline-red-500")} id="password" value={password} onChange={e => setPassword(e.target.value || '')}  type="password" />
            <p className="text-red-500 ml-[15%] text-sm">{!pswLength && "Password requires 8 characters minimum"}</p>

            <label className="ml-[15%] mb-[-1vh]" htmlFor="password">Confirm Password</label>
            <input required className={"border-2 w-[70%] mx-auto py-1 text-md hover:border-black duration-200 " + (pswMatch ? "" : "border-red-500 focus:outline-red-500")} id="password" value={passwordConfirm} onChange={e => handlePswMatch(e.target.value)}  type="password" />
            <p className="text-red-500 ml-[15%] text-sm">{(passwordConfirm.length > 0 && password.length > 0 && !pswMatch) ? "Passwords doesn't match" : ""}</p>

            <button type="submit" className="mx-auto bg-black text-white py-2 w-[70%] border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Register</button>

            <p onClick={() => router.push('/auth/login')} className="mx-auto cursor-pointer">Already registered? Login</p>
        </form>
    </>)
}
