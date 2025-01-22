export const msalConfig = {
  auth: {
    clientId: '13b6e063-87af-4aeb-a29e-b791121f904e', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://apanowicz.b2clogin.com/apanowicz.onmicrosoft.com/b2c_1_susi', // Choose SUSI as your default authority.
    knownAuthorities: ['apanowicz.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
    redirectUri: 'http://localhost:3002/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: 'http://localhost:3002/', // Indicates the page to navigate after logout.
  },
  cache: {
    cacheLocation: 'sessionStorage', // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
    storeAuthStateInCookie: true, // Set this to 'true' if you are having issues on IE11 or Edge
  }
}