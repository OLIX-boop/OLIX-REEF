'use client';

import Logo from '../../imgs/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Component = ({qt}:{qt:number}) => {
    const router = useRouter();

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
                <div className="mr-4 cursor-pointer">
                    <p className='text-xs' >Login / Signup</p>
                    <p className='text-xs font-bold' >My Account</p>
                </div>
                <div className="border-l border-white mr-4"></div>
                <i className="fa-regular fa-cart-shopping text-2xl cursor-pointer"></i>
                <span className='text-center h-[1%] bg-red-500 aspect-square text-xs ml-[-.3rem] rounded-full px-[.3rem]'>{qt}</span>
            </div>
        </div>
    </>)
}

export default Component;