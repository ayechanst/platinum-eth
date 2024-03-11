interface SubmoduleProps {
  submoduleName: string;
  submoduleStory: string;
  submoduleExplanation: string;
}
const SubmoduleTwo: React.FC<SubmoduleProps> = ({
  submoduleName,
  submoduleStory,
  submoduleExplanation,
}) => {
  const picture =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  return (
    <>
      <div className="m-5 p-5 bg-teal-800 rounded-xl flex-col">
        <h2 className="text-bold text-5xl p-5">
          {submoduleName}
        </h2>
        <div className="flex place-items-center">
          <figure className="w-1/2 bg-teal-800">
            <img
              src={`${picture}`}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="flex lg:flex-col w-1/2 pl-5">
            <div className="bg-teal-900 py-3 p-3 place-items-center rounded-t-xl">
              {submoduleStory}
            </div>
            <div className="place-items-center glass p-3 rounded-b-xl">
              {submoduleExplanation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmoduleTwo;
