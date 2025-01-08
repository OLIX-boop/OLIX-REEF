'use client';

import { StaticImageData } from "next/image";
import  Image from "next/image";

import { useRouter } from 'next/navigation'

const Category = ({img, title, to}: {img:StaticImageData, title:string, to:string}) => {
    const router = useRouter();

    return (
        <figure onClick={() => router.push('/'+to)} className="grid aspect-square overflow-hidden cursor-pointer rounded-2xl select-none">
            <div className="w-[100%]">
                <Image className="" src={img} alt="Background" />
            </div>
            <figcaption className="grid items-end text-4xl font-bold text-black p-3 select-none">{title}</figcaption>
        </figure>
    )
}


export default Category;