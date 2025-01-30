import { Configuration } from "@azure/msal-browser";

import { LogLevel } from "@azure/msal-browser";
// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_susi",
  },
  authorities: {
    signUpSignIn: {
      authority: import.meta.env.VITE_B2C_AUTHORITY,
    },
  },
  authorityDomain: "apanowicz.b2clogin.com",
};

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_B2C_CLIENT_ID, // This is the ONLY mandatory field that you need to supply.
    authority: import.meta.env.VITE_B2C_AUTHORITY, // Choose SUSI as your default authority.
    knownAuthorities: [import.meta.env.VITE_B2C_KNOWN_AUTHORITIES], // Mark your B2C tenant's domain as trusted.
    redirectUri: import.meta.env.VITE_B2C_REDIRECT_URI, // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: import.meta.env.VITE_B2C_POST_LOGOUT_REDIRECT_URI, // Indicates the page to navigate after logout.
  },
  cache: {
    cacheLocation: import.meta.env.VITE_B2C_CACHE_LOCATION,
    storeAuthStateInCookie: isIE || isEdge || isFirefox,
  },
  system: {
    allowPlatformBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
  scopes: [
    "offline_access",
    "openid",
    "https://apanowicz.onmicrosoft.com/api/demo.read",
  ],
};

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig = {
  scopes: ["https://apanowicz.onmicrosoft.com/api/demo.admin"],
  uri: `${import.meta.env.VITE_B2C_API_URI}/hello`,
};
