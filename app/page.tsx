import Category from "./_components/categories/category";
import SPS from "../imgs/products/sps.jpg";
import LPS from "../imgs/products/lps.jpeg";
import SOFT from "../imgs/products/soft.png";

export default function Home() {
  
  return (<>
    <div className="bg">OLIX REEF</div>
    <div className="mt-[45%] bg-white min-h-[60vh]">

      <h1 className="flex justify-center mb-12 text-3xl font-bold">CATEGORIES</h1>

      <div className="grid grid-cols-3 px-[10%] min-h-[1vh] gap-12">
        <Category title="SPS" to="sps" img={SPS}/>
        <Category title="LPS" to="lps" img={LPS}/>
        <Category title="SOFT" to="soft" img={SOFT}/>
      </div>
    </div>
    </>);
}
