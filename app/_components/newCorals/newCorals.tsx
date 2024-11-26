import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

import Card from "../card/card";

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
  const products = await getNewCorals();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[20%]">
        {products.items.slice(0, 4).map((e) => (
          <Card
            key={e.id}
            img={`http://${process.env.NEXT_DB_ID}/api/files/${e.collectionId}/${e.id}/${e.img}`}
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
