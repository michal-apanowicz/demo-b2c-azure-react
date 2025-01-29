import { FunctionComponent, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { Link } from "react-router-dom";

const Admin: FunctionComponent = () => {
  const { instance, accounts } = useMsal();
  const [claims, setClaims] = useState<any>(null);

  useEffect(() => {
    const getToken = async () => {
      if (accounts[0]) {
        try {
          const request = {
            scopes: ["openid", "profile"],
            account: accounts[0],
          };

          const response = await instance.acquireTokenSilent(request);
          setClaims(response.idTokenClaims);
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            console.error("Interactive token acquisition required");
          } else {
            console.error("Token acquisition failed:", error);
          }
        }
      }
    };

    getToken();
  }, [instance, accounts]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded flex items-center"
          >
            <span>← Back</span>
          </Link>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      <div className="flex flex-col items-center p-6">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 font-semibold">
            Token Claims
          </div>
          <pre className="p-4 bg-gray-50 overflow-auto">
            {claims ? (
              <code className="text-sm">{JSON.stringify(claims, null, 2)}</code>
            ) : (
              <p className="text-gray-500">Loading claims...</p>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Admin;
