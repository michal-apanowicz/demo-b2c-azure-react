import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_B2C_CLIENT_ID, // This is the ONLY mandatory field that you need to supply.
    authority: import.meta.env.VITE_B2C_AUTHORITY, // Choose SUSI as your default authority.
    knownAuthorities: [import.meta.env.VITE_B2C_KNOWN_AUTHORITIES], // Mark your B2C tenant's domain as trusted.
    redirectUri: import.meta.env.VITE_B2C_REDIRECT_URI, // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: import.meta.env.VITE_B2C_POST_LOGOUT_REDIRECT_URI, // Indicates the page to navigate after logout.
  },
  cache: {
    cacheLocation: import.meta.env.VITE_B2C_CACHE_LOCATION, // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
    storeAuthStateInCookie:
      import.meta.env.VITE_B2C_STORE_AUTH_STATE_IN_COOKIE === "true", // Set this to 'true' if you are having issues on IE11 or Edge
  },
};
