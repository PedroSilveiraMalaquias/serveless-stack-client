const config = {
  s3: {
    REGION: "sa-east-1",
    BUCKET: "wisely-ps-upload",
  },
  apiGateway: {
    REGION: "sa-east-1",
    URL: "https://8tl6tte9eb.execute-api.sa-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "sa-east-1",
    USER_POOL_ID: "sa-east-1_Dx3giJvDo",
    APP_CLIENT_ID: "18kfponvk5vrevo8cloa10b459",
    IDENTITY_POOL_ID: "sa-east-1:2b1aa22c-d809-44e5-aa0d-a4561510690b",
  },
};

export default config;