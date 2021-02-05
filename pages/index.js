import { Layout, InfoSection } from "../components";
import { homeObjOne } from "../data";
export default function Home() {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
    </Layout>
  );
}
