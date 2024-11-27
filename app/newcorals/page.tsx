import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/newcorals.jpg";
type Params = Promise<{ category: string }>

export default async function NewCorals(props : { searchParams: Params }) {
  const searchParams = await props.searchParams;
  return (
    <>
      <Page
        searchParams={searchParams}
        Banner={Banner}
        type="NEWCORALS"
        Categories={[]}
        desc="
        Welcome, here we present our latest arrivals straight from the ocean! Discover a selection of breathtaking corals, ready to enrich your aquariums with unique colors and shapes. Immerse yourself in this world of natural wonders!"
      />
    </>
  );
}
