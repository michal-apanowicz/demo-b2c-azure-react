/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_B2C_CLIENT_ID: string;
  readonly VITE_B2C_AUTHORITY: string;
  readonly VITE_B2C_KNOWN_AUTHORITIES: string;
  readonly VITE_B2C_REDIRECT_URI: string;
  readonly VITE_B2C_POST_LOGOUT_REDIRECT_URI: string;
  readonly VITE_B2C_CACHE_LOCATION: string;
  readonly VITE_B2C_STORE_AUTH_STATE_IN_COOKIE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
