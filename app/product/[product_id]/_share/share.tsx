'use client';
import Link from "next/link"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Share({product_id}:{product_id:string}) {
  return (
    <div className="flex gap-3">
      <Link
        href="#"
        onClick={() => {
          navigator.clipboard.writeText(
            process.env.NEXT_DNS + "/product/" + product_id
          );
        }}
      >
        <FontAwesomeIcon icon={faShare} className="p-[.4rem] text-md bg-black rounded-full border-2 border-black text-white hover:text-black hover:bg-white duration-300 hover:border-gray" />
      </Link>
      <Link
        href={"https://www.facebook.com/sharer.php?u=" + process.env.NEXT_DNS || "" + "/product/" + product_id}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-[1.8rem] hover:text-white duration-200 hover:bg-black rounded-full border-black border-2" />
      </Link>
    </div>
  );
}
