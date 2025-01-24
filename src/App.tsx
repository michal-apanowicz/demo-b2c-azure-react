import { IPublicClientApplication } from "@azure/msal-browser";
import "./App.css";
import Home from "./components/Home";
import { MsalProvider } from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";

interface IAppProps {
  instance: IPublicClientApplication;
}

function App({ instance }: IAppProps) {
  return (
    <div className="App">
      <MsalProvider instance={instance}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MsalProvider>
    </div>
  );
}

export default App;
