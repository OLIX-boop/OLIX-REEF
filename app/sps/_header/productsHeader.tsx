'use client';

import Filters from "../_filters/filters";
import { useState } from "react";

export default function ProductsHeader({length}:{length:number}) {
    const [filter, useFilter] = useState(true);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold pl-4">{length} Product(s)</h1>
        <button
          onClick={() => useFilter((e) => !e)}
          className="bg-black border-2 sm:hidden border-black text-white hover:bg-white hover:text-black duration-300 font-bold w-[20%] mr-3 rounded-[4px] py-1"
        >
          Filter
        </button>
      </div>

      <div
        className={
          "w-[97%] ml-4 overflow-hidden filtro sm:hidden " +
          (!filter ? "nascosto" : "")
        }
      >
        <Filters />
      </div>
    </>
  );
}
