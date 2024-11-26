"use client";
import { RecordModel } from "pocketbase";
import { useState } from "react";
import { Cart } from "@/app/_components/cart/cart";
import toast from "react-hot-toast";

export default function Quantity({product}: { product: RecordModel}) {
  const [qt, UseQt] = useState(1);

  let clickable = true;
  const handleCart = (e: React.MouseEvent<HTMLElement>) => {
    if (clickable) {
      clickable = false;
      UseQt(1);

      Cart.AddToCart(product, qt, (passed) => {
        if (!passed) 
          toast.error("Stock is empty");
        else 
          toast.success("Added to cart");
        clickable = true;
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
