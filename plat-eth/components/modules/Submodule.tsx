interface SubmoduleProps {
  submoduleName: string;
  submoduleStory: string;
  submoduleExplanation: string;
}
const Submodule: React.FC<SubmoduleProps> = ({
  submoduleName,
  submoduleStory,
  submoduleExplanation,
}) => {
  const picture =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  return (
    <>
      <div className="flex">
        <div className="m-5 p-5 bg-teal-800 rounded-xl">
          <div className="flex flex-row">
            <h2 className="text-bold text-5xl p-5">
              {submoduleName}
            </h2>
            <figure>
              <img
                src={`${picture}`}
                alt="Shoes"
                className="rounded-xl shadow-xl"
              />
            </figure>
          </div>
          <div className="flex flex-col lg:flex-row mt-5">
            <div className="rounded-l-xl bg-teal-900 py-3 p-3 place-items-center w-3/4">
              {submoduleStory}
            </div>
            <div className="rounded-r-xl place-items-center w-1/4 glass p-3">
              {submoduleExplanation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Submodule;
