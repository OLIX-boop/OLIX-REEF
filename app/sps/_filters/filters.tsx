const Filters = () => {
  return (
    <>
      <h1 className="font-bold text-xl mb-3">Categories</h1>

      <div className="border-gray-300 border-[1px] rounded-md p-3">
        <p>Acropora</p>
        <p>Millepora</p>
        <p>Montipora</p>
      </div>

      <div className="">
        <h1 className="font-bold text-lg mt-3 ">Filter by price</h1>

        <div className="grid grid-cols-2 mb-2">
          <div>
            <p>From</p>
            <input className="border-[1px] border-gray-400 rounded-[5px] w-[90%]" type="number" placeholder="€0.0" name="" id=""/>
          </div>

          <div>
            <p>To</p>
            <input className="border-[1px] border-gray-400 rounded-[5px] w-[90%]" type="number" placeholder="€100.0" name="" id=""/>
          </div>
        </div>

        <button className="bg-black border-2 border-black text-white hover:bg-white hover:text-black duration-300 font-bold w-[95%] rounded-[4px] py-1"> Confirm</button>
      </div>

      <div>
        <h1 className="font-bold text-lg mt-3 ">Sort By</h1>

        <select className="border-[1px] border-gray-300 w-full rounded-[5px] py-2 px-1 text-gray-700" name="" id="">
          <option selected value="none">None</option>
          <option value="new">Newest</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
          <option value="low-high">Price: low to high</option>
          <option value="high-low">Price: high to low</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
