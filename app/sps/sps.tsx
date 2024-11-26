import Page from "../_components/pages/pages";
import Banner from "../../imgs/categories/sps.jpg";
interface prms {
  category: string;
}

export default async function Lps({searchParams} : { searchParams: prms }) {
  return (
    <>
      <Page
        searchParams={searchParams}
        Banner={Banner}
        type="SPS"
        Categories={["Acropora", "Millepora", "Montipora"]}
        desc="Acropora can be one of the more difficult corals to keep but can also be the most rewarding. These corals require a very stable reef system, we do not recommend Acropora coral to those new in the hobby. They require strong, alternating flow, and high amounts of light. Acropora coral grow extremely fast under these conditions and will provide your tank with beautiful, tree-like structures."
      />
    </>
  );
}
