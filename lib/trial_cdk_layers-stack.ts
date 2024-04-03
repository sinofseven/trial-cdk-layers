import {RemovalPolicy, Stack, StackProps} from "aws-cdk-lib";
import {LayerVersion, Code} from "aws-cdk-lib/aws-lambda";
import {Construct} from "constructs";
import path from "path";

export class TrialCdkLayersStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TrialCdkLayersQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const layer = new LayerVersion(this, "TestLayer", {
      layerVersionName: "TrialCdkLayerVersion",
      removalPolicy: RemovalPolicy.RETAIN,
      code: Code.fromAsset(path.join(__dirname, "../src"))
    });
  }
}
