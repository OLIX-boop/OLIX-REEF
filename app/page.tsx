import Category from "./_components/categories/category";
import Coral from "../imgs/products/e-para.jpg";

export default function Home() {
  return (
    <div className="mt-[45%] bg-white h-[60vh]">
      <div className="grid">
        <Category title="SPS" to="fawd" img={Coral}/>
        <Category title="LPS" to="fawd" img={Coral}/>
        <Category title="SOFT" to="fawd" img={Coral}/>
      </div>
    </div>
  );
}
