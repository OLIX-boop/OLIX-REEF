import { newCorals } from "@/app/page";
import Card from "../card";

const NewCoralsCarousel = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[20%]">
        {newCorals.slice(0, 4).map((e) => (
          <Card
            key={e.id}
            title={e.title}
            img={e.img}
            price={e.price}
            id={e.id}
          />
        ))}
      </div>
    </>
  );
};

export default NewCoralsCarousel;
