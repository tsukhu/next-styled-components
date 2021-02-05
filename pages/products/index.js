import { Layout, InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./data";
export default function Services() {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </Layout>
  );
}
