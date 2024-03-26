import Category from "./_components/categories/category";
import SPS from "../imgs/products/sps.jpg";
import LPS from "../imgs/products/lps.jpeg";
import SOFT from "../imgs/products/soft.png";


export default function Home() {
  return (
    <div className="mt-[45%] bg-white h-[60vh]">
      <div className="grid grid-cols-3 px-[10%] min-h-[1vh] gap-12">
        <Category title="SPS" to="fawd" img={SPS}/>
        <Category title="LPS" to="fawd" img={LPS}/>
        <Category title="SOFT" to="fawd" img={SOFT}/>
      </div>
    </div>
  );
}
