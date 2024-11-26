export const revalidate = 0;

import Image, { StaticImageData } from "next/image"
import Badge from "../badge/badge";
import Products from "./_products/products";

import PocketBase from 'pocketbase';
import { faHeadset, faShield, faTruckFast } from "@fortawesome/free-solid-svg-icons";

interface Params {
    category: string
}

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);


export default async function Page({searchParams, type, desc, Banner, Categories}: {searchParams:Params, type:string, desc:string, Banner:StaticImageData, Categories:Array<string>}) {
    const getNewCorals = async () =>  {
        const date = new Date();
        date.setDate(new Date().getDate()-7);

        
        const result = await pb.collection('products').getFullList({
            filter: `created >= "${date.toISOString()}"`,
        });
        
        if (result.length >= 4) return result;
        else return (await pb.collection('products').getList(1, 8)).items;
    };
    const getProducts = async (category: string) => await pb.collection('products').getFullList({filter: `type = "${type}" ${category}`});

    const {category} = await searchParams;
    const filter = category ? `&& category = "${category}"` : "";
    const products = type == "NEWCORALS" ? await getNewCorals() : await getProducts(filter);
    return (<>
        <div id={type == "NEWCORALS" ? "NEWCORALS" : ""} className="absolute z-[-1] w-full" >
            <Image className="w-full" src={Banner} alt={type} />
        </div>

        <div className="mt-[10%] h-[25vw] bg-white mx-[20%] rounded-md">
            <div className="pt-[3vw]">
                <h1 className="font-bold w-fit mx-auto text-[4vw] mb-[2vw]">{type} CORALS</h1>
                <p className="m-auto w-fit text-[1.1vw] px-[10%] text-center">{desc}</p>
            </div>
        </div>

        <Products ip={process.env.NEXT_DB_ID || ''} products={products} type={type} Categories={Categories}/>

        <hr className="my-9 mx-[10%]" />

        <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faTruckFast} />
            <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faShield} />
            <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faHeadset} />
        </div>

    </>)
}