import { Layout, InfoSection, PricingSection } from "../../components";
import { homeObjOne, homeObjThree } from "./data";
export default function Services() {
  return (
    <Layout>
      <PricingSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </Layout>
  );
}
