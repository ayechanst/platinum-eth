import Layout from "../components/Layout";
import StoryCard from "../components/StoryCard";

const Prelude = () => {
  const story1 = {
    id: 1,
    title: "Purpose",
    subTitle: "Why make Plat-Eth?",
    text: "Plat-Eth is designed to bridge the gap between the skills speedrunethereum provides, and the knowledge that the speed-runner must research on their own.",
  };
  const story2 = {
    id: 1,
    title: "Skill Gap",
    subTitle: "",
    text: "",
  };
  const story3 = {
    id: 1,
    title: "Skill Gap",
    subTitle: "",
    text: "",
  };
  const story4 = {
    id: 1,
    title: "Skill Gap",
    subTitle: "",
    text: "",
  };
  return (
    <>
      <Layout>
        <StoryCard
          title={story1.title}
          subTitle={story1.subTitle}
          text={story1.text}
        />
      </Layout>
    </>
  );
};

export default Prelude;
