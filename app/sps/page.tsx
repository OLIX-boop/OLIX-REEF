export const revalidate = 0;

import Image from "next/image"
import Banner from "../../imgs/categories/sps.jpg"
import Badge from "../_components/badge"
import Products from "./_products/products";

import PocketBase from 'pocketbase';

interface Params {
    category: string
}

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

const getProducts = async (category: string) => await pb.collection('products').getFullList({filter: `type = "SPS" ${category}`});

export default async function Sps({searchParams}: {searchParams:Params}) {
    const filter = searchParams.category ? `&& category = "${searchParams.category}"` : "";
    const products = await getProducts(filter);
    return (<>
        <div className="absolute z-[-1] w-full" >
            <Image className="w-full" src={Banner} alt="SPS" />
        </div>

        <div className="mt-[10%] h-[25vw] bg-white mx-[20%] rounded-md">
            <div className="pt-[3vw]">
                <h1 className="font-bold w-fit mx-auto text-[4vw] mb-[2vw]">SPS CORALS</h1>
                <p className="m-auto w-fit text-[1.1vw] px-[10%] text-center">Acropora can be one of the more difficult corals to keep but can also be the most rewarding. These corals require a very stable reef system, we do not recommend Acropora coral to those new in the hobby. They require strong, alternating flow, and high amounts of light. Acropora coral grow extremely fast under these conditions and will provide your tank with beautiful, tree-like structures. </p>
            </div>
        </div>

        <Products ip={process.env.NEXT_DB_ID || ''} products={products} />

        <hr className="my-9 mx-[10%]" />

        <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-truck-fast" />
            <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-shield-check" />
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-headset" />
        </div>

    </>)
}