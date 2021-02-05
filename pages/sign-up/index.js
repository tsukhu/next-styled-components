import { Layout, InfoSection } from "../../components";
import { homeObjOne, homeObjThree } from "./data";
export default function SignUp() {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </Layout>
  );
}
