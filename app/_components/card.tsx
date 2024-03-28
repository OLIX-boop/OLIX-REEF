'use client';

import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation'

const Card = ({img, title, price, id }:{img: StaticImageData, title: string, price:number, id:string}) => {
    const rounter = useRouter();
    return (<>
        <div onClick={() => rounter.push('product/'+id)} className="w-[100%] hover:shadow-xl duration-300 p-4 rounded-md">
            <div className="overflow-hidden inline-block">
                <Image className="w-[100%] h-auto hover:scale-125 duration-300 " src={img} alt="CAW" />
            </div>
            <div className="mt-2">
                <h1 className="font-medium">{title}</h1>
                <h1 className="font-bold">€ {price}</h1>
            </div>
        </div>
    </>)
}

export default Card;