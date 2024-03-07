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
    id: 2,
    title: "Skill Gap",
    subTitle: "What is a skill gap?",
    text: "It's when accomplishing a task requires a level of skill beyond the skill of the user. That's a skill gap now what is a skill? A skill is an action.",
  };
  const story3 = {
    id: 3,
    title: "Knowledge Gap",
    subTitle: "What is a knowledge gap?",
    text: "",
  };
  const story4 = {
    id: 4,
    title: "Bridging the Two",
    subTitle: "Plat-Eth solves what problem?",
    text: "",
  };
  const story5 = {
    id: 5,
    title: "Advanced Memory Techniques",
    subTitle: "Why is Plat-Eth different?",
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
        <StoryCard
          title={story2.title}
          subTitle={story2.subTitle}
          text={story2.text}
        />
        <StoryCard
          title={story3.title}
          subTitle={story3.subTitle}
          text={story3.text}
        />
        <StoryCard
          title={story4.title}
          subTitle={story4.subTitle}
          text={story4.text}
        />
        <StoryCard
          title={story5.title}
          subTitle={story5.subTitle}
          text={story5.text}
        />
      </Layout>
    </>
  );
};

export default Prelude;
