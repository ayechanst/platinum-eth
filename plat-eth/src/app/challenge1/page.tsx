import ChallengePage from "../components/ChallengePage";
import Layout from "../components/Layout";
import { challengePageContent } from "./content";

const Challenge1 = () => {
  return (
    <>
      <div>
        <ChallengePage objects={challengePageContent} />
      </div>
    </>
  );
};
export default Challenge1;
