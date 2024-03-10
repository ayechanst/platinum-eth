interface IntroStoryProps {
  introStory: string;
}
const IntroStory: React.FC<IntroStoryProps> = ({
  introStory,
}) => {
  return (
    <>
      <div className="w-1/2 bg-teal-800 p-5 m-5 shadow-xl">
        <div className="">{introStory}</div>
      </div>
    </>
  );
};
export default IntroStory;
