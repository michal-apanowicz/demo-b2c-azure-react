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
    <div className="home">
      <p className="text-center fs-5 fw-bold">
        {title} - Authenticating a React App using Azure AD B2C
      </p>
      <AuthenticatedTemplate>
        <div className="alert alert-success" role="alert">
          You are authenticated! 😊 {accounts?.[0]?.name}
          <button
            type="button"
            className="btn btn-dark btn-sm float-end"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>

        <div className="card">
          <div className="card-header">Id Token</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{idToken}</li>
            <li className="list-group-item">
              Paste the above on{" "}
              <span>
                <a href="https://jwt.ms" target="_blank ">
                  jwt.ms
                </a>
              </span>{" "}
              to decode the token
            </li>
          </ul>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="alert alert-warning" role="alert">
          You are not authenticated 🥺
          <button
            type="button"
            className="btn btn-dark btn-sm float-end"
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
