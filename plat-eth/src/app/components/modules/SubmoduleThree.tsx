interface SubmoduleProps {
  submoduleName: string;
  submoduleStory: string;
  submoduleExplanation: string;
}
const SubmoduleThree: React.FC<SubmoduleProps> = ({
  submoduleName,
  submoduleStory,
  submoduleExplanation,
}) => {
  const picture =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  return (
    <>
      <div className="m-5 p-5 bg-teal-800 rounded-xl flex">
        <div className="flex flex-col">
          <h2 className="text-bold text-5xl p-5">
            {submoduleName}
          </h2>
          <figure className="w-3/8 bg-teal-800">
            <img
              src={`${picture}`}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>
        <div className="flex pl-5 flex-col place-items-center">
          <div className="bg-teal-900 py-3 p-3 place-items-center rounded-t-xl">
            {submoduleStory}
          </div>
          <div className="place-items-center w-full glass p-3 rounded-b-xl">
            {submoduleExplanation}
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmoduleThree;
