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
      <div>
        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <figure>
            <img src={`${picture}`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{submoduleName}</h2>
            <p className="py-5">{submoduleStory}</p>
            <div className="card-actions justify-end">
              {submoduleExplanation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Submodule;
