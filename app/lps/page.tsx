import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/lps.png";

type Params = Promise<{ category: string }>

export default async function Lps(props : { searchParams: Params }) {
  const searchParams = await props.searchParams;
  return (
    <>
      <Page
        searchParams={searchParams}
        Banner={Banner}
        type="LPS"
        Categories={["Euphyllia", "Cyphastrea", "Micromussa"]}
        desc="Large Polyp Stony Coral, also called LPS Coral, are a great choice for beginner and experienced hobbyists. LPS Coral feature beautiful, vivid colors and require easy to moderate care to keep them vibrant and healthy.  LPS Coral require medium to low light, medium flow, and their diets vary from species to species. "
      />
    </>
  );
}
