import { LoginType, MsalAuthProvider } from 'react-aad-msal';

const tenant = process.env.REACT_APP_TENANT;
const signInPolicy = process.env.REACT_APP_SIGNIN_POLICY;
const resetPolicy = process.env.REACT_APP_RESET_POLICY;
const applicationID = process.env.REACT_APP_CLIENT_ID;
const reactRedirectUri = window.location.origin;
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
const resetAuthority = `${instance}${tenant}/${resetPolicy}`;
const signInConfig = {
  auth: {
    authority: signInAuthority,
    clientId: applicationID,
    redirectUri: reactRedirectUri,
    validateAuthority: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};

const authenticationParameters = {
  scopes: ['https://lhfb2c.onmicrosoft.com/api/read'],
};

const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: `${window.location.origin}/auth.html`,
};

const Provider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options
);

const handleForgotPassword = (error) => {
  if (error && error.errorMessage.indexOf('AADB2C90118') > -1) {
    Provider.setAuthenticationParameters({ authority: resetAuthority });
    Provider.login();
  }
};

Provider.registerErrorHandler(handleForgotPassword);

export default Provider;
