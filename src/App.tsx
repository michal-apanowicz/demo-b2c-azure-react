import { IPublicClientApplication } from "@azure/msal-browser";
import Home from "./components/Home";
import { MsalProvider } from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";
import { FunctionComponent } from "react";

interface IAppProps {
  instance: IPublicClientApplication;
}

const App: FunctionComponent<IAppProps> = ({ instance }) => {
  return (
    <div className="App">
      <MsalProvider instance={instance}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MsalProvider>
    </div>
  );
};

export default App;
