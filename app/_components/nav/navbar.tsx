'use client';

import Logo from '../../../imgs/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Cart } from '../cart/cart';
import { useEffect, useState } from 'react';
import DefaultUser from '../../../imgs/defaultUser.png'
import {User} from '@/app/user';

interface LoginData {
    avatar?: string,
    collectionId?: string,
    collectionName?: string,
    created?: string,
    email?: string,
    emailVisibility?: boolean,
    id?: string,
    name?: string,
    updated?: string,
    username?: string,
    verified?: boolean,
    token?: string,
}

let updateLogin:(data:LoginData) => void;

export function updateData(data:LoginData) {
    if (updateLogin)
        updateLogin(data);
};

const Component = ({ip}: {ip:string}) => {
    const router = useRouter();
    const [qt, setQt] = useState(Cart.quantity);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [logData, setLogData] = useState<LoginData>({});

    Cart.SetCartHook(setQt); // Initialize state for Cart

    useEffect(() =>{
        const setUp = async () => {
            const error = await User.SetUpUser(); // initialize User

            if (!error) {
                setLoggedIn(User.login);
                setLogData(User.data);
            }
        }

        updateLogin = (data:LoginData) => {
            setLoggedIn(true);
            setLogData(data);
        }

        setUp();
    }, [])

    console.log(User.data)

    
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
                {!loggedIn && <div className="mr-4 cursor-pointer" onClick={() => router.push('/auth/login')}>
                    <p className='text-xs' >Login / Signup</p>
                    <p className='text-xs font-bold' >My Account</p>
                </div>}

                {loggedIn && <div onClick={() => router.push('/profile')} className="h-6 w-6 overflow-hidden rounded-full mr-4 cursor-pointer">
                    <Image src={logData.avatar === '' ? DefaultUser : `http://${ip}/api/files/_pb_users_auth_/${logData.id}/${logData.avatar}`} alt='Profile' width={500} height={500}/>
                </div>}

                <div className="border-l border-white mr-4"></div>
                <i className="fa-regular fa-cart-shopping text-2xl cursor-pointer"></i>
                <span className='text-center h-[1%] bg-red-500 aspect-square text-xs ml-[-.3rem] rounded-full px-[.3rem]'>{qt}</span>
            </div>
        </div>
    </>)
}

export default Component;