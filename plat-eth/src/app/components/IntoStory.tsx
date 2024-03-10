interface IntroStoryProps {
  introStory: string;
}
const IntroStory: React.FC<IntroStoryProps> = ({
  introStory,
}) => {
  return (
    <>
      <div>
        <p>{introStory}</p>
      </div>
    </>
  );
};
export default IntroStory;
