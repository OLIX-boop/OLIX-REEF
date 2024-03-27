'use client';

import Logo from '../../imgs/logo.png';
import Image from 'next/image';

import { useRouter } from 'next/navigation'
const Component = ({qt}:{qt:number}) => {
    const router = useRouter();

    return (<>
        <div className="bg-black flex justify-between align-center py-4 px-10">
            <div className="text-white my-auto">
                <a target='_blank' href="http://www.instagram.com/olix.reef">
                    <i className="fa-brands fa-instagram text-3xl insta"></i>
                </a>
            </div>

            <div className="max-w-20 cursor-pointer" onClick={() => router.push('/')}>
                <Image src={Logo} alt="OLIX REEF" />
            </div>

            <div className="text-white my-auto mr-[.3rem]">
                <i className="fa-regular fa-cart-shopping text-2xl"></i>
                <span className='align-top bg-red-500 aspect-square text-xs ml-[-.3rem] rounded-full px-[.3rem]'>{qt}</span>
            </div>
        </div>
    </>)
}

export default Component;