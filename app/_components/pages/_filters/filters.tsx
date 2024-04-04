'use client';
import { useRouter } from "next/navigation";

const Filters = ({Sort, Clear, Categories, type}: {Sort: (type:string) => void, Clear: ()=>void, Categories: Array<string>, type:string}) => {
  const router = useRouter();
  const route = type.toLowerCase();
  return (
    <>
      <h1 className="font-bold text-xl mb-3">Categories</h1>

      <div className="border-gray-300 border-[1px] rounded-md p-3">
        {Categories.map((e, key) => <p key={key} onClick={() => router.push(`/${route}?category=${e}`)}>{e}</p>)}
      </div>

      <div>
        <h1 className="font-bold text-lg mt-3 ">Sort By</h1>

        <select onChange={(e) => Sort(e.target.value)} className="border-[1px] border-gray-300 w-full rounded-[5px] py-2 px-1 text-gray-700" name="" id="">
          <option value="none">None</option>
          <option value="new">Newest</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
          <option value="low-high">Price: low to high</option>
          <option value="high-low">Price: high to low</option>
        </select>
      </div>

      <button onClick={() => {router.push('/'+route); Clear()}} className="bg-black border-2 mt-4 border-black text-white hover:bg-white hover:text-black duration-300 font-bold w-full rounded-[4px] py-1">Clear Filters</button>
    </>
  );
};

export default Filters;
