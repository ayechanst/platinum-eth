import Layout from "./Layout";

interface ModulePageProps {
  modulePageName: string;
}

const ModulePage: React.FC<ModulePageProps> = ({
  modulePageName,
}) => {
  return (
    <>
      <div>
        <Layout>
          // intro story // important info // story card //
          info card
        </Layout>
      </div>
    </>
  );
};
export default ModulePage;
