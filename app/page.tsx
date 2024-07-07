import Category from "./_components/categories/category";
import Badge from "./_components/badge/badge";
import NewCoralsCarousel from "@/app/_components/newCorals/newCorals";
import Button from "./_components/newCorals/button";

import SPS from "../imgs/products/sps.jpg";
import LPS from "../imgs/products/lps.jpeg";
import SOFT from "../imgs/products/soft.png";

export default async function Home() {
  return (<>
    <div className="bg"></div>
    <h1 className="w-fit py-[16%] bgText m-auto">OLIX REEF</h1>
    <div className=" bg-white min-h-[60vh]">

      <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
        <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-truck-fast" />
        <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-shield-check" />
        <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-headset" />
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
