'use client';

import Filters from "../_filters/filters"
import Card from "@/app/_components/card"
import ProductsHeader from "../_header/productsHeader"
import { RecordModel } from "pocketbase"
import { useState } from "react"

export default function Products({products, ip}: {products:RecordModel[], ip:string}) {
    const [filtered, setFiltered] = useState(products);
    return(<>
        <div className="sm:mr-[10%] mt-[3%] flex">
            <div className="w-[80%] ml-[5%] hidden sm:block">
                <Filters />
            </div>

            <div className="sm:pr-[12%] pl=0 pr-0 sm:pl-4">
                <ProductsHeader length={filtered.length}/>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4">
                    {filtered.map((e:RecordModel) => 
                        <Card
                            key={e.id}
                            title={e.title}
                            img={`http://${ip}/api/files/${e.collectionId}/${e.id}/${e.img}`}
                            price={e.price}
                            id={e.id}
                        />
                    )}
                </div>

            </div>
        </div>
    </>)
}