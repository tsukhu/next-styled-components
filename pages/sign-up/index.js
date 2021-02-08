import { Layout, InfoSection } from "../../components";
export default function SignUp({ homeObjOne, homeObjThree }) {
  return (
    <Layout>
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
      homeObjThree
    }
  };
};
