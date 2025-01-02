const awsconfig: any = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
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
          redirectSignIn: [
            "http://localhost:3000",
            "https://mdev.dev.aws.whatuni.com",
            "https://mdev.dev.aws.whatuni.com/new/whatuni",
            "https://mdev.dev.aws.whatuni.com/home",
            "https://mtest.test.aws.whatuni.com/new/whatuni",
            "https://mtest.test.aws.whatuni.com/home",
            "https://mtest.test.aws.whatuni.com",
          ],
          redirectSignOut: [
            "http://localhost:3000",
            "https://mdev.dev.aws.whatuni.com",
            "https://mdev.dev.aws.whatuni.com/new/whatuni",
            "https://mdev.dev.aws.whatuni.com/home",
            "https://mtest.test.aws.whatuni.com/new/whatuni",
            "https://mtest.test.aws.whatuni.com/home",
            "https://mtest.test.aws.whatuni.com",
          ],
          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
};

export default awsconfig;
