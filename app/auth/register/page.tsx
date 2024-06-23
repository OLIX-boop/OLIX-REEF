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

    const [success, setSuccess] = useState(false);
    
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
            const data = await response.json();

            if (!response.ok) 
                return setError(data.error);
            else
                setSuccess(true);


            setError('');
            setTimer();
        } catch (err) {
            setEmail('error');
        }
    }

    const delay = 60*2;
    const [timerUse, setTimerUse] = useState(false);
    const [time, setTime] = useState(delay);
    const setTimer = () => {
        if (!timerUse) {
            setTimerUse(true);
            setTime(delay);
            const id = setInterval(() => {
                setTime(t => {
                    const newT = t-1;

                    if (newT < 1) {
                        setTimerUse(false);
                        clearInterval(id);
                    }

                    return newT; 
                });

            }, 1000);
            
        }
    }

    const handlePswMatch = (value:string) => {
        setPasswordConfirm(value || '');
        setPswMatch(password===value || passwordConfirm.length === 0 || password.length === 0);
    }
    const handlePswLength = (e:any) => {
        setPswLength((e.target.value.length >= 8 || e.target.value.length === 0));
        setPswMatch(passwordConfirm===e.target.value || passwordConfirm.length === 0 || password.length === 0);
    }

    const sendVerification = async () => {
        if (!timerUse) {
            setError('New verification link sent!');

            const response = await fetch('/api/auth/sendverification', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email})
            });


            setTimer();
        } else setError('Wait '+time+' seconds before sending another verification link.');
    }

    return (<>
        {!success && <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[30%] mt-[10vh] m-auto border-2 border-black justify-center align-middle py-9">
            <h1 className="text-2xl font-bold mx-auto">Register</h1>

            {error.length > 0 && <p className=" text-red-600 border-2 border-red-600 rounded-md p-2 bg-red-200 w-[70%] m-auto text-sm">&nbsp;{error}</p>}

            <div className="grid grid-cols-2 w-[70%] mx-auto ">
                <div>
                    <label className="mb-[-1vh]" htmlFor="name">First Name</label>
                    <input required maxLength={10} className="px-2 border-2 pl-2 mx-auto py-1 w-[90%] text-md border-gray-600 hover:border-black duration-200" type="text" value={firstName} onChange={e => setFirstName(e.target.value || '')} id="name" />
                </div>

                <div>
                    <label className="mb-[-1vh]" htmlFor="name">Last Name</label>
                    <input required maxLength={10} className="px-2 border-2 pl-2 mx-auto w-[100%] py-1 text-md border-gray-600 hover:border-black duration-200" type="text" value={lastName} onChange={e => setLastName(e.target.value || '')} id="lastname" />
                </div>
            </div>

            <label className="ml-[15%] mb-[-1vh]" htmlFor="email">Email</label>
            <input required className="px-2 border-2 w-[70%] pl-2 mx-auto py-1 text-md border-gray-600 hover:border-black duration-200" type="email" value={email} onChange={e => setEmail(e.target.value || '')}  id="email" />

            <label className="ml-[15%] mb-[-1vh]" htmlFor="password">Password</label>
            <input required minLength={8} onInput={e => handlePswLength(e)} className={"px-2 border-2 w-[70%] pl-2 mx-auto py-1 text-md border-gray-600 hover:border-black duration-200 "+(pswLength ? "" : "border-red-500 focus:outline-red-500")} id="password" value={password} onChange={e => setPassword(e.target.value || '')}  type="password" />
            <p className="text-red-500 ml-[15%] text-sm">{!pswLength && "Password requires 8 characters minimum"}</p>

            <label className="ml-[15%] mb-[-1vh]" htmlFor="password">Confirm Password</label>
            <input required className={"px-2 border-2 w-[70%] pl-2 mx-auto py-1 text-md border-gray-600 hover:border-black duration-200 " + (pswMatch ? "" : "border-red-500 focus:outline-red-500")} id="password" value={passwordConfirm} onChange={e => handlePswMatch(e.target.value)}  type="password" />
            <p className="text-red-500 ml-[15%] text-sm">{(passwordConfirm.length > 0 && password.length > 0 && !pswMatch) ? "Passwords don't match" : ""}</p>

            <button type="submit" className="mx-auto bg-black text-white py-2 w-[70%] px-2 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Register</button>

            <p className="mx-auto flex">Already registered?&nbsp; <p className="cursor-pointer font-bold" onClick={() => router.push('/auth/login')}>Login</p></p>
        </form>}

        {success && <div className="flex flex-col gap-4 w-[50%] my-[30vh] m-auto px-2 border-2 border-black justify-center align-middle py-9">

            <h1 className="text-2xl font-bold mx-auto">Verify your email!</h1>
            <p className=" mx-auto w-[80%] text-center mb-[-1vh]">Thanks for creating an account! To ensure it&apos;s yours, we&apos;ve sent a verification email to <strong>{email}</strong>. Click the link in that email to complete your account setup. Didn&apos;t see it? Check your spam folder or request a new verification email below. Once verified, you&apos;ll be ready to use your account!</p>

            <p className="mt-5 mx-auto text-sm">{error}</p>
            <div className="grid grid-cols-2 gap-2 ">
                <button onClick={sendVerification} type="submit" className="ml-auto bg-black text-white py-2 w-[60%] border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Resend email</button>
                <button onClick={() => router.push('/')} type="submit" className="mr-auto text-black bg-white py-2 w-[60%] border-2 border-black font-bold hover:bg-black hover:text-white duration-150">Return to OLIX Reef</button>
            </div>
        </div> }
    </>)
}
