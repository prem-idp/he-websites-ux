
const awsconfig: any = {
  Auth: {
    Cognito: {
      userPoolId: "eu-west-2_FUKmcZjeN",
      userPoolClientId: "4risjiv6rt1skup4ka5e1bd6em",

      loginWith: {
        // OPTIONAL - Hosted UI configuration
        oauth: {
          domain: "dev-idpc-dom-user.auth.eu-west-2.amazoncognito.com",
          scopes: [
            //'phone',
            "email",
            "profile",
            "openid",
            //'aws.cognito.signin.user.admin'
          ],
          redirectSignIn: ["https://mdev.dev.aws.whatuni.com","https://mdev.dev.aws.whatuni.com/new/whatuni"],
          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
};

export default awsconfig;
