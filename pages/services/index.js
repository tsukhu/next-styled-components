import { Layout, InfoSection } from "../../components";
import { Pricing as PricingSection } from "@bit/tsukhu.ultra.pricing";
export default function Services({ homeObjOne, homeObjThree }) {
  return (
    <Layout>
      <PricingSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  const { homeObjOne, homeObjThree } = data;
  return {
    props: {
      homeObjOne,
      homeObjThree,
    },
  };
};
