import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/newcorals.jpg";
interface prms {
  category: string;
}

type Params = Promise<{ searchParams: prms }>

export default async function NewCorals({searchParams}: { searchParams: prms }) {
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
