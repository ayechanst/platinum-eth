import { AccountPageContent } from "../../challenge1/content";
import IntroStory from "./IntoStory";
import Layout from "../Layout";
import Summary from "../Summary";
import Submodule from "./Submodule";
import Vocabulary from "./Vocabulary";
import SubmoduleTwo from "./SubmoduleTwo";
import SubmoduleThree from "./SubmoduleThree";

interface ModulePageProps {
  object: AccountPageContent;
}

const ModulePage: React.FC<ModulePageProps> = ({
  object,
}) => {
  const submoduleArray = object.submodules;

  const picture =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  return (
    <>
      <div className="">
        <div className="navbar flex justify-between items-center bg-base-100">
          <button className="btn">Go Back</button>
          <a className="btn btn-ghost text-xl">
            {object.modulePageName}
          </a>
          <button className="btn">Go Forward</button>
        </div>
        <div className="px-60 pt-20 justify-center items-center bg-teal-700">
          <p className="text-bold text-5xl p-5">
            {object.header}
          </p>
          <div className="flex">
            <Vocabulary vocab={object.vocabulary} />
            <figure>
              <img src={`${picture}`} alt="Shoes" />
            </figure>
            <IntroStory introStory={object.introStory} />
          </div>
          <div className="w-4/5 flex flex-wrap justify-center">
            {submoduleArray.map((submodule) => {
              if (submodule.id % 3 === 0) {
                return (
                  <div className="ml-20 mb-20">
                    <SubmoduleThree
                      submoduleName={
                        submodule.submoduleName
                      }
                      submoduleStory={
                        submodule.submoduleStory
                      }
                      submoduleExplanation={
                        submodule.submoduleExplanation
                      }
                    />
                  </div>
                );
              } else if (submodule.id % 2 === 0) {
                return (
                  <div className="ml-10">
                    <SubmoduleTwo
                      submoduleName={
                        submodule.submoduleName
                      }
                      submoduleStory={
                        submodule.submoduleStory
                      }
                      submoduleExplanation={
                        submodule.submoduleExplanation
                      }
                    />
                  </div>
                );
              } else {
                return (
                  <div className="ml-15">
                    <Submodule
                      submoduleName={
                        submodule.submoduleName
                      }
                      submoduleStory={
                        submodule.submoduleStory
                      }
                      submoduleExplanation={
                        submodule.submoduleExplanation
                      }
                    />
                  </div>
                );
              }
            })}
          </div>
          <Summary summary={object.summary} />
        </div>
      </div>
    </>
  );
};
export default ModulePage;
