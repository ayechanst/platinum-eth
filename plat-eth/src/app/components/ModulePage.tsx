import { AccountPageContent } from "../challenge1/content";
import IntroStory from "./IntoStory";
import Layout from "./Layout";
import Submodule from "./Submodule";
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
      <div>
        <Layout>
          <IntroStory introStory={object.introStory} />
          <Vocabulary vocab={object.vocabulary} />
          <div>
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
        </Layout>
      </div>
    </>
  );
};
export default ModulePage;
