import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { FunctionComponent } from "react";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
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
