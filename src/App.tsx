import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { FunctionComponent } from "react";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="logout" element={<Logout />} />
      <Route element={<ProtectedRoute redirectPath="/" />}>
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
