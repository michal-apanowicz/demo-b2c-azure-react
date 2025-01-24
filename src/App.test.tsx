import { render } from "@testing-library/react";
import App from "./App";
import { IPublicClientApplication } from "@azure/msal-browser";

test("renders learn react link", () => {
  const instance = {} as IPublicClientApplication;
  const result = render(<App instance={instance} />);
  expect(result).toBeTruthy();
});
