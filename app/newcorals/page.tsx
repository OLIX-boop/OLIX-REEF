import Page from "../_components/pages/page";
import Banner from "../../imgs/categories/newcorals.jpg";
interface Params {
  category: string;
}

export default function NewCorals({ searchParams }: { searchParams: Params }) {
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
