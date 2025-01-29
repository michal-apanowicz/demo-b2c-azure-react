import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { FunctionComponent } from "react";
import Logout from "./components/Logout";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="logout" element={<Logout />} />
        <Route path="admin" element={<Logout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
