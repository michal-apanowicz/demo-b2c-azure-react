import { FunctionComponent, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { Link } from "react-router-dom";
import { callApi } from "../api/callApi";

const Admin: FunctionComponent = () => {
  const { instance, inProgress } = useMsal();
  const [apiData, setApiData] = useState<string>("");

  useEffect(() => {
    if (!apiData && inProgress === InteractionStatus.None) {
      callApi().then((response) => setApiData(response));
    }
  }, [inProgress, apiData, instance]);

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
          <div className="bg-gray-200 px-4 py-2 font-semibold">Response</div>
          <pre className="p-4 bg-gray-50 overflow-auto">
            {apiData ? (
              <code className="text-sm">
                {JSON.stringify(apiData, null, 2)}
              </code>
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Admin;
