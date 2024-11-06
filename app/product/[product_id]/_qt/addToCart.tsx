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
    <div className="flex flex-col min-[1350px]:flex-row mt-5">
      <button className="cart-button border-0 rounded-sm p-1 w-[60%] min-[1350px]:w-[70%] h-10 mt-4 min-[1350px]:mt-auto" onClick={handleCart}>
        Add to cart
      </button>
    </div>
  );
}
