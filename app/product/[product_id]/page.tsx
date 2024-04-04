export const revalidate = 0;
import Image from "next/image";
import notFound from '../../../imgs/products/notfound.png';
import Badge from "@/app/_components/badge/badge";

import NewCoralsCarousel from "@/app/_components/newCorals/newCorals";

interface params {
    product_id: string
}

import PocketBase from 'pocketbase';
import AddToCart from "./_qt/addToCart";
import Share from "./_share/share";

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

const getProduct = async (id:string) => await pb.collection('products').getOne(id);

export default async function Products({params}: {params:params}) {
    const { product_id } = params;

    const product = await getProduct(product_id);

    const img = `http://${process.env.NEXT_DB_ID}/api/files/${product.collectionId}/${product.id}/${product.img}`;

    return (<>
        <div className="w-[80%] m-auto my-10 flex">
            <div className="w-[50%] hidden md:block h-auto overflow-hidden">
                <Image className="hover:scale-125 duration-200" height={1000} width={1000} src={product?.img !== '' ? img : notFound}  alt=""/>
            </div>
            <div className="ml-8 md:w-[50%]">
                <h1 className="font-bold text-5xl mb-3 w-fit text-center md:text-left md:mx-0 mx-auto">{product?.title}</h1>
                <h1 className="font-bold text-5xl mb-3 w-fit text-center md:text-left md:mx-0 mx-auto">€{product?.price}</h1>

                <div className="w-[80%] mx-auto my-9 md:hidden block h-auto overflow-hidden">
                    <Image className="hover:scale-125 duration-200" height={1000} width={1000} src={product?.img !== '' ? img : notFound}  alt=""/>
                </div>

                <div className="flex justify-between">
                    <h1 className="text-xl mb-3">Stock: {product?.stock}</h1>
                    <Share product_id={product.id} />
                </div>
                    

                <hr className="border-black" />

                <AddToCart product={product}/>

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