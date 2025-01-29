import { useMsal } from "@azure/msal-react";
import { FunctionComponent, useEffect } from "react";

const Logout: FunctionComponent = () => {
  const { accounts, instance } = useMsal();

  useEffect(() => {
    if (accounts.length > 0) {
      //   instance.logoutPopup();
    }
  });

  return (
    <div className="logout">
      <p className="text-center fs-5 fw-bold">Looged out...</p>
    </div>
  );
};
export default Logout;
