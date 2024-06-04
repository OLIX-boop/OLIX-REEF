
import { Cart } from "./cart"
import toast from "react-hot-toast";
import Image from "next/image";
import { useState } from "react";

export default function CartComponent({disableCart}: {disableCart: (b: boolean) => void }) {
    const [cart, setCart] = useState(Cart);
    const [products, setProducts] = useState(Object.fromEntries(cart.products));

    const increaseProduct =  (id:string) => {
        Cart.AddToCart(products[id].prod, 1, (passed:boolean) => {
            if (!passed) 
                toast.error("Stock is empty");
            else
                toast.success("Added one element");
            setCart(Cart);
            setProducts(Object.fromEntries(cart.products));
        });
    }

    const decreaseProduct = (id:string) => {
        Cart.RemoveFromCart(products[id].prod, false);
        setCart(Cart);
        setProducts(Object.fromEntries(cart.products));
        toast.success("Removed one element");
    }
    
    const deleteProduct = (id:string) =>  {
        Cart.RemoveFromCart(products[id].prod, true);
        setCart(Cart);
        setProducts(Object.fromEntries(cart.products));
        toast.success("Removed element");
    }
    
    return <>
        <div className="fixed w-full h-full bg-gray-400/50 duration-300 z-10">
            <div className="bg-white ml-auto w-[30vw] h-full p-5">
                <div className="flex justify-between">
                    <i className="fa-regular fa-cart-shopping text-2xl cursor-pointer"></i>

                    <div className="relative">
                        <h2 className="font-bold text-xl">Your Cart</h2>
                        <span className="absolute text-xs bg-blue-500 w-fit px-[.4rem] py-[.1rem] h-5 text-center rounded-full bottom-3 left-[6rem] text-white">{cart.quantity}</span>
                    </div>

                    <i onClick={() => disableCart(false)} className="fa-solid fa-xmark text-3xl"></i>
                </div>

                <hr className="border-black my-2" />

                <div className="h-[70%] overflow-auto cart-scroll pr-2">
                    {Object.keys(products).map(id => 
                        <div key={id} className="p-2 my-1 flex border-2 border-white hover:border-gray-500 duration-300 w-[100%] max-h-[70%]">
                            <div className="h-min my-auto mr-2">
                                <i onClick={() => deleteProduct(id)} className="fa-solid fa-xmark text-xl aspect-square text-center m-0 hover:text-red-500 duration-300"></i>
                            </div>
                            <div className="max-h-[7rem] max-w-[7rem]">
                                <Image src={`http://${process.env.NEXT_DB_ID}/api/files/${products[id].prod.collectionId}/${id}/${products[id].prod.img}`} alt="Img" width={600} height={600} />
                            </div>
                            <div className="ml-3 flex flex-col gap-2 py-1">
                                <h1>{products[id].prod.title}</h1>
                                <h2 className="font-bold">${products[id].prod.price}</h2>

                                <div className="">
                                    <button onClick={() => increaseProduct(id)} className="px-2 aspect-square text-center shadow-md m-0 rounded-full">+</button>
                                    <span className="mx-4">{products[id].quantity}</span>
                                    <button onClick={() => decreaseProduct(id)} className="px-[.6rem]  aspect-square text-center shadow-md m-0 rounded-full">-</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <hr className="border-black my-2" />

                <div className="flex flex-col p-3">
                    <h1 className="font-bold mb-3">Total amount: {Cart.quantity}</h1>

                    <button className="mb-2 bg-blue-500 border-2 border-white text-white p-2 rounded-md font-bold duration-300 hover:bg-white hover:text-black hover:border-blue-500">CONTINUE SHOPPING</button>
                    <button className="bg-blue-500 border-2 border-white text-white p-2 rounded-md font-bold duration-300 hover:bg-white hover:text-black hover:border-blue-500">PROCEED TO CHECKOUT</button>
                </div>




            </div>
        </div>
    </>
}