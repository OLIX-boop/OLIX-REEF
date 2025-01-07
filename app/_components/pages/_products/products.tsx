'use client';

import Filters from "../_filters/filters"
import Card from "@/app/_components/card/card"
import { RecordModel } from "pocketbase"
import { useState, useEffect } from "react"

export default function Products({products, ip, type, Categories}: {products:RecordModel[], ip:string, type:string, Categories:Array<string>}) {
    const [filtered, setFiltered] = useState([...products]);
    const [filter, UseFilter] = useState(true);

    useEffect(()=> setFiltered([...products]),[products]);

    const sortContent = (type:string) => {
        const result = [...products];
        switch (type) {
            case 'none': break;
            case 'new':
                result.sort((a,b) => new Date(b.created).getTime() - new Date(a.created).getTime());
                break;
            case 'a-z':
                result.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1);
                break;
            case 'z-a':
                result.sort((a, b) => a.title === b.title ? 0 : b.title < a.title ? -1 : 1);
                break;
            case 'low-high':
                result.sort((a,b) => a.price - b.price);
                break;
            case 'high-low':
                result.sort((a,b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFiltered(result);
    }

    const Clear = () => setFiltered([...products]);

    return(<>
        <div className="sm:mr-[10%] mt-[3%] flex">
            <div className="w-[80%] ml-[5%] hidden sm:block">
                <Filters Categories={Categories} type={type} Sort={sortContent} Clear={Clear} />
            </div>

            <div className="sm:pr-[12%] pl=0 pr-0 sm:pl-4">
                <div className="flex justify-between">
                    <h1 className="font-bold pl-4">{filtered.length} Product(s)</h1>
                    <button onClick={() => UseFilter((e) => !e)} className="bg-black border-2 sm:hidden border-black text-white hover:bg-white hover:text-black duration-300 font-bold w-[20%] mr-3 rounded-[4px] py-1" >
                        Filter
                    </button>
                </div>

                <div className={ "w-[97%] ml-4 overflow-hidden filtro sm:hidden " + (!filter ? "nascosto" : "") }>
                    <Filters Categories={Categories} type={type} Sort={sortContent} Clear={Clear} />
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4">
                    {filtered.map((e:RecordModel) => 
                        <Card
                            key={e.id}
                            title={e.title}
                            img={`${process.env.NEXT_PRODUCTION == "false" ? "http" : "https"}://${ip}:8090/api/files/${e.collectionId}/${e.id}/${e.img}`}
                            price={e.price}
                            id={e.id}
                        />
                    )}
                    {filtered.length === 0 && <div className="w-[68vw] h-[100%] hover:shadow-xl duration-300 p-4 rounded-md"></div>}
                </div>

            </div>
        </div>
    </>)
}