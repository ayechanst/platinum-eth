import { ChallengePageContent } from "../challenge1/content";
import Checkpoint from "./Checkpoint";
import Layout from "./Layout";

interface ChallengePageProps {
  objects: ChallengePageContent[];
}

const ChallengePage: React.FC<ChallengePageProps> = ({
  objects,
}) => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col">
          {objects.map((object) => {
            return (
              <div className="flex m-10 bg-teal-600 rounded-2xl shadow-xl">
                <Checkpoint
                  name={object.checkpointTitle}
                  moduleNames={object.checkpointModules}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};
export default ChallengePage;
