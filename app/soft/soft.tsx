import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/soft.jpg";
interface prms {
  category: string;
}

export default async function Lps({searchParams} : { searchParams: prms }) {
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
