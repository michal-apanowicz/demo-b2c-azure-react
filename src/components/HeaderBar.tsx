import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";

interface HeaderBarProps {
  title: string;
}

const HeaderBar: FunctionComponent<HeaderBarProps> = ({ title }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        {title} - Authenticating a React App using Azure AD B2C
      </h1>
      <AuthenticatedTemplate>
        <Link
          to="/admin"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Admin Panel
        </Link>
      </AuthenticatedTemplate>
    </header>
  );
};

export default HeaderBar;
