import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: FunctionComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout flex justify-center items-center h-screen">
      <div className="bg-blue-100 shadow-md rounded-lg p-6">
        <p className="text-center text-lg font-bold">Logged out...</p>
      </div>
    </div>
  );
};

export default Logout;
