import { FunctionComponent, useEffect, useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import HeaderBar from "../components/HeaderBar";
import { b2cPolicies, loginRequest } from "../config/authConfig";

const Home: FunctionComponent = () => {
  const { instance, accounts } = useMsal();
  const [idToken, setIdToken] = useState<string | undefined>(
    accounts?.[0]?.idToken
  );

  useEffect(() => {
    setIdToken(accounts?.[0]?.idToken);
  }, [accounts]);

  const handleLogin = async () => {
    try {
      const result = await instance.acquireTokenPopup({
        ...loginRequest,
        authority: b2cPolicies.authorities.signUpSignIn.authority,
      });
      console.log("APAN (handleLogin): ", result);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await instance.logoutRedirect();
      setIdToken(undefined);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const title = import.meta.env.VITE_APP_TITLE;

  return (
    <div className="min-h-screen">
      <HeaderBar title={title} />
      <div className="p-4">
        <AuthenticatedTemplate>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
            <span>You are authenticated! 😊 {accounts?.[0]?.name}</span>
            <button
              type="button"
              className="bg-black text-white text-sm py-1 px-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-4 py-2 font-semibold">Id Token</div>
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-2 break-all">{idToken}</li>
              <li className="px-4 py-2">
                Paste the above on{" "}
                <a
                  href="https://jwt.ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 underline"
                >
                  jwt.ms
                </a>{" "}
                to decode the token
              </li>
            </ul>
          </div>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
            <span>You are not authenticated 🥺</span>
            <button
              type="button"
              className="bg-black text-white text-sm py-1 px-2 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </UnauthenticatedTemplate>
      </div>
    </div>
  );
};

export default Home;
