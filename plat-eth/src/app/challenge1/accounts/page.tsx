import ModulePage from "@/app/components/modules/ModulePage";
import { accountPageContent } from "../content";

const AccountPage = () => {
  return (
    <>
      <div>
        <ModulePage object={accountPageContent} />
      </div>
    </>
  );
};
export default AccountPage;
