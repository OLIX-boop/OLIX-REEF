import { Cart } from "./cart"
import Image from "next/image";

export default function CartComponent() {
    const products = Object.fromEntries(Cart.products); // TODO: delete default cart values
    console.log(products)
    return <>
        <div className="fixed w-full h-full bg-gray-400/50 duration-300 z-10">
            <div className="bg-white ml-auto w-[30vw] h-full p-5">
                <div className="flex justify-between">
                    <i className="fa-regular fa-cart-shopping text-2xl cursor-pointer"></i>

                    <div className="relative">
                        <h2 className="font-bold text-xl">Your Cart</h2>
                        <span className="absolute text-xs bg-blue-500 w-fit px-[.4rem] py-[.1rem] h-5 text-center rounded-full bottom-3 left-[6rem] text-white">{Cart.quantity}</span>
                    </div>

                    <i className="fa-solid fa-xmark text-3xl"></i>
                </div>

                <hr className="border-black my-2" />

                <div className="grid grid-flow-row">
                    {Object.keys(products).map(id => 
                        <div key={id} className="p-2 my-1 flex border-2 border-white hover:border-gray-500 duration-300 w-[100%]">
                            <div className="max-h-[7rem] max-w-[7rem]">
                                <Image src={`http://${process.env.NEXT_DB_ID}/api/files/${products[id].prod.collectionId}/${id}/${products[id].prod.img}`} alt="Img" width={600} height={600} />
                            </div>
                            <div className="ml-3 flex flex-col gap-2 py-1">
                                <h1>{products[id].prod.title}</h1>
                                <h2 className="font-bold">${products[id].prod.price}</h2>

                                <div className="">
                                    <button className="px-2 aspect-square text-center align-middl shadow-md m-0 rounded-full">+</button>
                                    <span className="mx-4">{products[id].quantity}</span>
                                    <button className="px-[.6rem]  aspect-square text-center align-middl shadow-md m-0 rounded-full">-</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>



            </div>
        </div>
    </>
}