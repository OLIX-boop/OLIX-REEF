import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/soft.jpg";
type Params = Promise<{ category: string }>

export default async function Lps(props : { searchParams: Params }) {
  const searchParams = await props.searchParams;
  return (
    <>
      <Page
        searchParams={searchParams}
        Banner={Banner}
        type="SOFT"
        Categories={["Zoanthus"]}
        desc="Soft Coral, or Alcyonacea, are a favorite among beginner hobbyists due to their ease of care, assortment of structures, and a huge variety of colors and patterns. Soft Coral do not build an internal skeleton, therefore they need low flow, low to moderate lighting, and can be more resilient to water parameters in the tank."
      />
    </>
  );
}
