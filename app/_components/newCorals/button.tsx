'use client';
import { useRouter } from "next/navigation";

const Button = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.push('newcorals')} className="mt-8 bg-black border-2 border-black text-white w-[10rem] h-10 m-auto hover:text-black hover:bg-white duration-300">See more</button>
    );
  };
  
  export default Button;