import { useMsal } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  redirectPath: string;
};

const ProtectedRoute = (protectedRouteProps: ProtectedRouteProps) => {
  const { accounts } = useMsal();

  if (!accounts || accounts.length === 0) {
    return <Navigate to={protectedRouteProps.redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
