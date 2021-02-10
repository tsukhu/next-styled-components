import { Layout, InfoSection } from "../components";
import { Pricing as PricingSection} from '@bit/tsukhu.ultra.pricing';

export default function Home({
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
}) {
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  const { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } = data;
  return {
    props: {
      homeObjOne,
      homeObjTwo,
      homeObjThree,
      homeObjFour
    }
  };
};
