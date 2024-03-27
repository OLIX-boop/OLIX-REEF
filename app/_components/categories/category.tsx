'use client';

import { StaticImageData } from "next/image";
import  Image from "next/image";

import { useRouter } from 'next/navigation'
const Category = ({img, title, to}: {img:StaticImageData, title:string, to:string}) => {
    const router = useRouter();

    return (
        <figure onClick={() => router.push('/'+to)} className="grid overflow-hidden cursor-pointer rounded-2xl">
            <Image src={img} alt="Mountains" />
            <figcaption className="grid items-end text-4xl font-bold text-black p-3">{title}</figcaption>
        </figure>
    )
}


export default Category;