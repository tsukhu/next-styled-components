import { Layout, InfoSection, PricingSection } from "../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data";
export default function Home() {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <PricingSection />
      <InfoSection {...homeObjFour} />
    </Layout>
  );
}
