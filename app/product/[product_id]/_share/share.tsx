'use client';

export default function Share({product_id}:{product_id:string}) {
  return (
    <div className="flex gap-3">
      <a
        href="#"
        onClick={() => {
          navigator.clipboard.writeText(
            process.env.NEXT_DNS + "/product/" + product_id
          );
        }}
      >
        <i className="fa-regular fa-share p-[.4rem] text-md bg-black rounded-full border-2 border-black text-white hover:text-black hover:bg-white duration-300 hover:border-gray" />
      </a>
      <a
        href={
          "https://www.facebook.com/sharer.php?u=" +
          process.env.NEXT_DNS +
          "/product/" +
          product_id
        }
        target="_blank"
      >
        <i className="fa-brands fa-facebook text-[1.8rem] hover:text-white duration-200 hover:bg-black rounded-full border-black border-2" />
      </a>
    </div>
  );
}
