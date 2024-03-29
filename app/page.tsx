import Category from "./_components/categories/category";
import Badge from "./_components/badge";
import Card from "./_components/card";
import NewCoralsCarousel from "@/app/_components/newCorals/newCorals";


import SPS from "../imgs/products/sps.jpg";
import LPS from "../imgs/products/lps.jpeg";
import SOFT from "../imgs/products/soft.png";

import Speciosa from "../imgs/products/fs.png";

const newCorals = [
  {title: "Acropora Speciosa Flaming Sunrise", price: 1400.00, img: Speciosa, stock:1, id: "6738feb7-e626-4a74-b9ff-266e42974e5e"},
  {title: "Acropora Duchè", price: 999.99, img: SPS, stock:1, id: "4fcd912e-f69d-4d48-9837-0ab9c0db82c7"},
  {title: "Acropora Duchè", price: 999.99, img: SPS, stock:1, id: "e6a6a3b7-2848-41ce-95d9-3041b7a8dbdd"},
  {title: "Acropora Duchè", price: 999.99, img: SPS, stock:1, id: "8bb0e1c7-90b7-4da9-bcbe-425152e8ad2e"},
  {title: "Acropora Duchè", price: 999.99, img: SPS, stock:1, id: "dd459993-0324-4946-aec2-d4e8f16b310a"},
  {title: "Acropora Duchè", price: 999.99, img: SPS, stock:1, id: "581155a0-abaa-4882-85e0-84239918c8f4"},
]

export {newCorals};

export default function Home() {
  
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
        <button className="mt-8 bg-black border-2 border-black text-white w-[10rem] h-10 m-auto hover:text-black hover:bg-white duration-300">See more</button>
      </div>



    </div>
    </>);
}
