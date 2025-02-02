import { apiConfig, loginRequest } from "../config/authConfig";
import { msalInstance } from "../main";

export async function callApi(accessToken?: string) {
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    console.log("APAN (response): ", response);

    accessToken = response.accessToken;
  }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(apiConfig.uri, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
