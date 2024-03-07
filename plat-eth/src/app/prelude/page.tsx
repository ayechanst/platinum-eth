import Layout from "../components/Layout";
import Link from "next/link";

const Prelude = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked
              />
              <div className="collapse-title text-xl font-medium">
                What is the Purpose of Platinum-Eth
              </div>
              <div className="collapse-content">
                <p>
                  Plat-Eth is designed to bridge the gap
                  between the skills speedrunethereum
                  provides, and the knowledge that the
                  speed-runner must research on their own.
                  It serves as the central hub for the basic
                  knowledge to program and navigate the web3
                  environment.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Skill versus Knowledge
              </div>
              <div className="collapse-content">
                <p>
                  Skill is the application of knowledge.
                  Without skill, knowledge cannot be
                  applied. Without knowledge, skill cannot
                  be excersized.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Briding the Gap
              </div>
              <div className="collapse-content">
                <p>
                  By starting at the same place which Speed
                  Run Eth starts, Platinum Eth serves as a
                  companion guide to Speed Run Eth.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/challenge1"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Prelude;
