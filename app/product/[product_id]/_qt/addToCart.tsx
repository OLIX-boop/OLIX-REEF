"use client";
import { RecordModel } from "pocketbase";
import { useState } from "react";
import { Cart } from "@/app/_components/cart/cart";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default function Quantity({ product }: { product: RecordModel}) {
  const [qt, useQt] = useState(1);

  let clickable = true;
  const handleCart = (e: React.MouseEvent<HTMLElement>) => {
    if (clickable) {
      clickable = false;
      useQt(1);

      Cart.AddToCart(product, qt, (passed) => {
        if (!passed) {
          clickable = true;
          toast.error("Stock is empty");
        } else {
          const target = e.currentTarget.classList;
          target.add("clicked");
          
          setTimeout(() => {
            target.remove("clicked");
            clickable = true;
          }, 3000);
        }
      });
    }
  };

  return (
    <div className="mt-5 flex flex-col min-[1350px]:flex-row">
      <div className="w-min md:mx-0 mx-auto">
        <h1 className="w-min m-auto font-bold mb-1">Quantity</h1>
        <div className="addCart flex border-gray-200 w-min rounded-xl h-10">
          <button onClick={() => useQt((prev) => (prev >= product.stock ? prev : ++prev))} className="btn1 px-4 border-2 hover:border-black">+</button>
          <input value={qt} className="w-14 focus:outline-none text-center border-t-2 border-b-2" type="number" name="" id=""/>
          <button onClick={() => useQt((prev) => (prev <= 1 ? prev : --prev))} className="btn2 px-4 border-2 hover:border-black">-</button>
        </div>
      </div>

      <button className="md:mx-0 mx-auto cart-button min-[1350px]:ml-5 border-0 rounded-sm relative p-1 w-[60%] min-[1350px]:w-[40%] h-10 mt-4  min-[1350px]:mt-auto" onClick={handleCart}>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added</span>
        <FontAwesomeIcon icon={faShoppingCart} className="fas fa-shopping-cart"/>
        <FontAwesomeIcon icon={faBox} className="fas fa-box"/>
      </button>
    </div>
  );
}
