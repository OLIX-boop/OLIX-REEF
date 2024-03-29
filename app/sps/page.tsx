"use client";
import Image from "next/image"
import Banner from "../../imgs/categories/sps.jpg"
import Card from "../_components/card"
import Badge from "../_components/badge"
import Filters from "./_filters/filters"

import { useState } from "react"

import { newCorals } from "../page"

export default function Sps() {
    const [filter, useFilter] = useState(false);


    return (<>
        <div className="absolute z-[-1]">
            <Image className="w-full" src={Banner} alt="SPS" />
        </div>

        <div className="mt-[10%] h-[48vh] bg-white mx-[20%] rounded-md">
            <div className="pt-[3vw]">
                <h1 className="font-bold w-fit mx-auto text-[4vw] mb-[2vw]">SPS CORALS</h1>
                <p className="m-auto w-fit text-[1.1vw] px-[10%] text-center">Acropora can be one of the more difficult corals to keep but can also be the most rewarding. These corals require a very stable reef system, we do not recommend Acropora coral to those new in the hobby. They require strong, alternating flow, and high amounts of light. Acropora coral grow extremely fast under these conditions and will provide your tank with beautiful, tree-like structures. </p>
            </div>
        </div>

        <div className="mr-[10%] mt-[3%] flex">
            <div className="w-[100%] ml-[5%]">
                <Filters />
            </div>

            <div className="pr-[12%] pl-4">
                <div className="flex justify-between">
                    <h1 className="font-bold pl-4">{newCorals.length} Product(s)</h1>
                    <button onClick={() => useFilter(e => !e)} className="bg-black border-2 border-black text-white hover:bg-white hover:text-black duration-300 font-bold w-[20%] mr-3 rounded-[4px] py-1">Filter</button>
                </div>
                
                <div className={"w-[97%] ml-4 " + (filter ? "sm:hidden" :"")}>
                    <Filters />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {newCorals.map(e => 
                        <Card
                        key={e.id}
                        title={e.title}
                        img={e.img}
                        price={e.price}
                        id={e.id}
                    />)}
                </div>

            </div>
        </div>

        <hr className="my-9 mx-[10%]" />

        <div className="flex min-[960px]:flex-row flex-col justify-center pt-7 mb-12 gap-7">
                <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-truck-fast" />
                <Badge title="10 days Warantee" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-shield-check" />
                <Badge title="Fast Shipping" text="We guarantee a 7 days shipping in EU. 14 in other countries. Otherwise You'll recieve a 5% discount code." icon="fa-regular fa-headset" />
            </div>

    </>)
}