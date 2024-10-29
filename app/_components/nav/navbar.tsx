'use client';

import Logo from '../../../imgs/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Cart } from '../cart/cart';
import { useEffect, useState } from 'react';
import {User, UserLoginData} from '@/app/user';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

let updateLogin:(data:UserLoginData|null) => void;

export function updateData(data:UserLoginData|null) {
    updateLogin(data);
};

const Component = ({ip, setCart}: {ip:string, setCart: (b: boolean) => void}) => {
    const router = useRouter();
    const [qt, setQt] = useState(Cart.quantity);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    Cart.SetCartHook(setQt); // Initialize state for Cart

    useEffect(() =>{
        
        const setup = async () => {
            setTimeout(async () => {
                await User.SetUpUser(); // setup user login
                setTimeout(() => {
                    setLoggedIn(User.login);
                }, 100);
            }, 100);
        }

        updateLogin = (data:UserLoginData|null) => {
            if (data)
                setLoggedIn(true);
            else
                setLoggedIn(false);
        }

        setup();
    }, [User])
    
    return (<>
        <div className="bg-black grid grid-cols-2 sm:grid-cols-3 justify-between align-center py-4 px-10">
            <div className="hidden sm:flex text-white my-auto gap-8">
                <h1 onClick={() => router.push('/sps')} className='flex items-center font-bold cursor-pointer category-text'>SPS</h1>
                <h1 onClick={() => router.push('/lps')} className='flex items-center font-bold cursor-pointer category-text'>LPS</h1>
                <h1 onClick={() => router.push('/soft')} className='flex items-center font-bold cursor-pointer category-text'>SOFT</h1>
            </div>

            <div className="max-w-20 mx-auto cursor-pointer" onClick={() => router.push('/')}>
                <Image src={Logo} alt="OLIX REEF" />
            </div>

            <div className="text-white my-auto mr-[.3rem] flex justify-end">
                {!loggedIn && <div className="mr-4 cursor-pointer" onClick={() => router.push('/v1/auth/login')}>
                    <p className='text-xs' >Login / Signup</p>
                    <p className='text-xs font-bold' >My Account</p>
                </div>}

                {loggedIn && <div onClick={() => router.push('/profile')} className="h-6 w-6 overflow-hidden rounded-full aspect-square mr-4 cursor-pointer flex items-center justify-center">
                    <i className="fa-solid fa-user text-2xl"></i>
                </div>}

                <div className="border-l border-white mr-4"></div>
                <FontAwesomeIcon icon={faCartShopping} onClick={() => setCart(true)} className="fa-regular fa-cart-shopping text-2xl cursor-pointer"/>
                <span className='text-center h-[1%] bg-blue-500 aspect-square text-xs ml-[-.3rem] rounded-full px-[.3rem]'>{qt}</span>
            </div>
        </div>
    </>)
}

export default Component;