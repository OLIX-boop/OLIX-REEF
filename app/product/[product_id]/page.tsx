'use client';

import Image from "next/image";
import { newCorals } from "@/app/page";
import notFound from '../../../imgs/products/notfound.png';
import { useState } from "react";
import Badge from "@/app/_components/badge";

import NewCoralsCarousel from "@/app/_components/newCorals/newCorals";

interface params {
    product_id: string
}

export default function Products({params}: {params:params}) {
    const { product_id } = params;

    const [qt, useQt] = useState(1);

    const product = newCorals.find(({ id }) => id === product_id );
    let clickable = true;
    const handleCart = (e:React.MouseEvent<HTMLElement>) => {
        if (clickable) {
            clickable=false;
            const target = e.currentTarget.classList;
            target.add('clicked');
            setTimeout(() => {
                target.remove('clicked');
                clickable=true;
            }, 3000)
        }
    };
    return (<>
        <div className="w-[80%] m-auto my-10 flex">
            <div className="w-[50%] hidden md:block h-auto overflow-hidden">
                <Image className="hover:scale-125 duration-200" src={product?.img || notFound}  alt=""/>
            </div>
            <div className="ml-8 md:w-[50%]">
                <h1 className="font-bold text-5xl mb-3 w-fit text-center md:text-left md:mx-0 mx-auto">{product?.title}</h1>
                <h1 className="font-bold text-5xl mb-3 w-fit text-center md:text-left md:mx-0 mx-auto">€{product?.price}</h1>

                <div className="w-[80%] mx-auto my-9 md:hidden block h-auto overflow-hidden">
                    <Image className="hover:scale-125 duration-200" src={product?.img || notFound}  alt=""/>
                </div>

                <div className="flex justify-between">
                    <h1 className="text-xl mb-3">Stock: {product?.stock}</h1>
                    <div className="flex gap-3">
                        <a href="#" onClick={() => {navigator.clipboard.writeText(process.env.NEXT_DNS+"/product/"+product_id)}}>
                            <i className="fa-regular fa-share p-[.4rem] text-md bg-black rounded-full border-2 border-black text-white hover:text-black hover:bg-white duration-300 hover:border-gray"/>
                        </a>
                        <a href={"https://www.facebook.com/sharer.php?u="+process.env.NEXT_DNS+"/product/"+product_id} target="_blank">
                            <i className="fa-brands fa-facebook text-[1.8rem] hover:text-white duration-200 hover:bg-black rounded-full border-black border-2"/>
                        </a>
                    </div>
                </div>
                    

                <hr className="border-black" />

                <div className="mt-5 flex flex-col min-[1350px]:flex-row">
                    <div className="w-min md:mx-0 mx-auto">
                        <h1 className="w-min m-auto font-bold mb-1">Quantity</h1>
                        <div className="addCart flex border-gray-200 w-min rounded-xl h-10">
                            <button onClick={() => useQt(prev => prev >= product!.stock ? prev: ++prev)} className="btn1 px-4 border-2 hover:border-black">+</button>
                            <input value={qt} className="w-14 focus:outline-none text-center border-t-2 border-b-2" type="number" name="" id="" />
                            <button onClick={() => useQt(prev => prev <= 1 ? prev: --prev)} className="btn2 px-4 border-2 hover:border-black">-</button>
                        </div>
                    </div>

                    <button className="md:mx-0 mx-auto cart-button min-[1350px]:ml-5 border-0 rounded-sm relative p-1 w-[60%] min-[1350px]:w-[40%] h-10 mt-4  min-[1350px]:mt-auto" onClick={handleCart}>
                        <span className="add-to-cart">Add to cart</span>
                        <span className="added">Added</span>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-box"></i>
                    </button>
                </div>

                <hr className="border-black mt-8" />

                <div className="mt-4">
                    <h1 className="font-bold text-2xl mb-2">Description</h1>

                    <p className="text-lg">Raccolto dai migliori Alex Duca della contea. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, magni accusamus. Magnam, corporis at alias, beatae, possimus dolore maiores facere officia sequi natus aut itaque soluta? Impedit ab nihil voluptatem!</p>
                </div>
            </div>
        </div>


        <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-truck-fast" />
            <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-shield-check" />
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-headset" />
        </div>

        <hr className="border-black mx-[8%] my-8" />

        <div className="flex flex-col">
            <h1 className="font-bold text-3xl mx-auto mb-3 w-fit">You might also like: </h1>

            <NewCoralsCarousel />

            <button className=" mt-8 bg-black border-2 border-black text-white w-[10rem] h-10 m-auto hover:text-black hover:bg-white duration-300">See more</button>
        </div>
    </>)
}