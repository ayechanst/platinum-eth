import { AccountPageContent } from "../challenge1/content";
import IntroStory from "./IntoStory";
import Layout from "./Layout";
import Submodule from "./Submodule";
import Summary from "./Summary";
import Vocabulary from "./Vocabulary";

interface ModulePageProps {
  object: AccountPageContent;
}

const ModulePage: React.FC<ModulePageProps> = ({
  object,
}) => {
  const submoduleArray = object.submodules;
  return (
    <>
      <div className="">
        <div className="navbar flex justify-center items-center bg-base-100">
          <button className="btn">Go Back</button>
          <a className="btn btn-ghost text-xl">
            {object.modulePageName}
          </a>

          <button className="btn">Go Forward</button>
        </div>
        <div className="px-60 pt-20 justify-center items-center bg-teal-700">
          <div className="flex">
            <IntroStory introStory={object.introStory} />
            <Vocabulary vocab={object.vocabulary} />
          </div>
          <div className="grid grid-cols-2">
            {submoduleArray.map((submodule) => {
              return (
                <div>
                  <Submodule
                    submoduleName={submodule.submoduleName}
                    submoduleStory={
                      submodule.submoduleStory
                    }
                    submoduleExplanation={
                      submodule.submoduleExplanation
                    }
                  />
                </div>
              );
            })}
          </div>
          <Summary summary={object.summary} />
        </div>
      </div>
    </>
  );
};
export default ModulePage;
