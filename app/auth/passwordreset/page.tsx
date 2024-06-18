'use client';

import { useState } from "react";

interface Params {
    email: string;
}

export default function PasswordReset({searchParams}: {searchParams:Params}) {


    const [email, setEmail] = useState(searchParams.email || '');
    const [msg, setMsg] = useState('');

    const delay = 60 * 3;
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

    const requestPasswordReset = async () => {
        if (!timerUse) {
            setTimer();
            try {
                const form = {email};
                const response = await fetch('/api/auth/resetpassword', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(form)
                });

                if (!response.ok) 
                    setMsg('Something went wrong!');
                else
                    setMsg(`Password reset sent to ${email}!`);

            } catch (err) {
                setMsg('Something went wrong!');
            }
        } else setMsg(`Wait ${time} seconds before sending another request!`);
    };
    

    return(<>
        <div className="flex flex-col gap-4 w-[30%] my-[10vh] m-auto border-2 border-black justify-center align-middle py-9">
            <h1 className="text-2xl font-bold mx-auto mb-2">Reset Password</h1>

            <label className="ml-[15%] mb-[-1vh]" htmlFor="email">Insert your email:</label>
            <input required onChange={e => setEmail(e.target.value || '')} className="border-2 border-gray-600 outline-none w-[70%] mx-auto py-1 text-md hover:border-black duration-200 pl-2" type="email" id="email" value={email} />

            <p className="ml-[15%] mb-[-1vh] text-sm w-[70%]">{msg}</p>

            <button onClick={requestPasswordReset} className="mx-auto bg-black text-white py-2 w-[70%] border-2 border-black font-bold hover:text-black hover:bg-white duration-150">Reset Password</button>
            
        </div>
    </>)
}