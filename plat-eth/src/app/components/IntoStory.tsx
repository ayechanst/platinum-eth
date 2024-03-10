interface IntroStoryProps {
  introStory: string;
}
const IntroStory: React.FC<IntroStoryProps> = ({
  introStory,
}) => {
  return (
    <>
      <div className="p-5 m-5 bg-blue-700">
        intro story:
        <p>{introStory}</p>
      </div>
    </>
  );
};
export default IntroStory;
