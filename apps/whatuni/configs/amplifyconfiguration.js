const awsconfig = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: {
    domain: `dev-idpc-dom-user.auth.${process.env.NEXT_PUBLIC_AWS_COGNITO_REGION}.amazoncognito.com`,
    scope: ["phone", "email", "profile", "openid"],
    redirectSignIn: "http://localhost:3000",
    redirectSignOut: "http://localhost:3000",
    responseType: "code",
  },
};

export default awsconfig;
