import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { FunctionComponent, useState } from "react";

const Home: FunctionComponent = () => {
  const { instance } = useMsal();
  const [idToken, setIdToken] = useState("");

  const Login = async () => {
    try {
      let { idToken } = await instance.loginPopup();
      setIdToken(idToken);
    } catch (error) {
      console.error(error);
    }
  };

  const Logout = async () => {
    try {
      await instance.logoutPopup();
      setIdToken("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <p className="text-center fs-5 fw-bold">
        Authenticating a React App using Azure AD B2C
      </p>
      <AuthenticatedTemplate>
        <div className="alert alert-success" role="alert">
          You are authenticated! 😊
          <button
            type="button"
            className="btn btn-dark btn-sm float-end"
            onClick={() => Logout()}
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
            onClick={() => Login()}
          >
            Login
          </button>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Home;
