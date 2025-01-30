import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const Logout: FunctionComponent = () => {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();

  useEffect(() => {
    const performLogout = async () => {
      if (accounts.length > 0) {
        try {
          await instance.logoutPopup();
        } catch (error) {
          console.error("Logout failed:", error);
        }
      }

      const timer = setTimeout(() => {
        navigate("/");
      }, 50);

      return () => clearTimeout(timer);
    };

    performLogout();
  }, [instance, accounts, navigate]);

  return (
    <div className="logout flex justify-center items-center h-screen">
      <div className="bg-blue-100 shadow-md rounded-lg p-6">
        <p className="text-center text-lg font-bold">Logged out...</p>
      </div>
    </div>
  );
};

export default Logout;
