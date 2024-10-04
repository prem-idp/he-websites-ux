import { PolicyStatement, Effect } from "aws-cdk-lib/aws-iam";

export class MyLogGroupArm {
  // static setLogGroup: any;
  public setLogGroup(
    region: any,
    account: any,
    serverFunctionName: string,
  ): string {
    // Process the input data (for example, convert it to uppercase)
    const logGroupArn = `arn:aws:logs:${region}:${account}:log-group:/aws/lambda/${serverFunctionName}:*`;
    const cloudwatchPolicyStatement: any = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: [
        "logs:CreateLogStream",
        "logs:DescribeLogStreams",
        "logs:PutLogEvents",
        "logs:CreateLogGroup",
        "cloudwatch:PutMetricData",
      ],
      resources: [logGroupArn],
    });
    // const processedData = input.toUpperCase();

    // Return the processed data
    return cloudwatchPolicyStatement;
  }
}
