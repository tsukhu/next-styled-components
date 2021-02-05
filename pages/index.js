import { Layout, InfoSection } from "../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../data";
export default function Home() {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </Layout>
  );
}
