'use client';
import Category from "@/app/_components/categories/categories";
import Badge from "@/app/_components/badge/badge";
//import NewCoralsCarousel from "@/app/_components/newCorals/newCorals";
import Button from "@/app/_components/newCorals/button";
import BG from "@/app/_components/bg/bg";

import SPS from "@/imgs/products/sps.jpg";
import LPS from "@/imgs/products/lps.jpeg";
import SOFT from "@/imgs/products/soft.png";
import { faHeadset, faShield, faTruckFast } from "@fortawesome/free-solid-svg-icons";

import dynamic from 'next/dynamic'
 
const NewCoralsCarousel = dynamic(
  () => import("@/app/_components/newCorals/newCorals"),
  { ssr: false }
)
 

export default function Home() {
  return (<>
    <BG />
    <h1 id="HOME" className="w-fit py-[16%] bgText m-auto select-none">OLIX REEF</h1>
    <div className=" bg-white min-h-[60vh]">

      <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
        <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faTruckFast} />
        <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faShield} />
        <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon={faHeadset} />
      </div>

      <h1 className="flex justify-center mb-12 text-3xl font-bold">CATEGORIES</h1>

      <div className="grid grid-cols-3 px-[10%] min-h-[1vh] gap-2  sm:gap-12">
        <Category title="SPS" to="sps" img={SPS}/>
        <Category title="LPS" to="lps" img={LPS}/>
        <Category title="SOFT" to="soft" img={SOFT}/>
      </div>

      <h1 className="flex justify-center mt-12 mb-8 text-3xl font-bold">NEW CORALS</h1>

      <NewCoralsCarousel/>

      <div className="flex justify-center">
        <Button />
      </div>
    </div>
    </>);
}
