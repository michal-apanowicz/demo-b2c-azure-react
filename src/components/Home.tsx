import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { FunctionComponent, useEffect, useState } from "react";

const Home: FunctionComponent = () => {
  const { instance, accounts } = useMsal();
  const [idToken, setIdToken] = useState(accounts?.[0]?.idToken);

  const login = async () => {
    try {
      await instance.loginPopup();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIdToken(accounts?.[0]?.idToken);
  }, [accounts]);

  const logout = async () => {
    try {
      await instance.logoutRedirect();
      setIdToken("");
    } catch (error) {
      console.error(error);
    }
  };
  const title = import.meta.env.VITE_APP_TITLE;

  return (
    <div className="home p-4">
      <header className="text-center text-2xl font-bold mb-4">
        {title} - Authenticating a React App using Azure AD B2C
      </header>
      <AuthenticatedTemplate>
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 flex"
          role="alert"
        >
          You are authenticated! 😊 {accounts?.[0]?.name}
          <button
            type="button"
            className="bg-black text-white text-sm py-1 px-2 rounded float-right"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 font-semibold">Id Token</div>
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-2">{idToken}</li>
            <li className="px-4 py-2">
              Paste the above on{" "}
              <span>
                <a
                  href="https://jwt.ms"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  jwt.ms
                </a>
              </span>{" "}
              to decode the token
            </li>
          </ul>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          You are not authenticated 🥺
          <button
            type="button"
            className="bg-black text-white text-sm py-1 px-2 rounded float-right"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Home;
