import { Layout, InfoSection } from "../../components";
export default function Services({ homeObjOne, homeObjTwo }) {
  return (
    <Layout>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  const { homeObjOne, homeObjTwo } = data;
  return {
    props: {
      homeObjOne,
      homeObjTwo
    }
  };
};
