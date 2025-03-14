import PocketBase, { ListResult, RecordModel } from 'pocketbase';

const pb = new PocketBase(`${process.env.NEXT_PRODUCTION == "false" ? "http" : "https"}://${process.env.NEXT_DB_IP}${process.env.NEXT_PRODUCTION == "false" ? ":8090" : ""}`);
pb.autoCancellation(false);
import Card from "@/app/_components/card/card";

const getNewCorals = async () =>  {
  const date = new Date();
  date.setDate(new Date().getDate()-7);

  const result = await pb.collection('products').getList(1, 4, {
    filter: `created >= "${date.toISOString()}"`,
  });

  if (result.items.length >= 4) return result;
  else return await pb.collection('products').getList(1, 4);
};

const NewCoralsCarousel = async () => {
  let products: ListResult<RecordModel> = {page:0, perPage:0, totalItems:0, totalPages:0, items:[]};
  try {
    products = await getNewCorals();
  } catch (e) {}//console.log("error while fetching new corals", e)}
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[20%]">
        {products.items.slice(0, 4).map((e) => (
          <Card
            key={e.id}
            img={`${process.env.NEXT_PRODUCTION == "false" ? "http" : "https"}://${process.env.NEXT_DB_IP}${process.env.NEXT_PRODUCTION == "false" ? ":8090" : ""}/api/files/${e.collectionId}/${e.id}/${e.img}`}
            title={e.title}
            price={e.price}
            id={e.id}
          />
        ))}
      </div>
    </>
  );
};

export default NewCoralsCarousel;
