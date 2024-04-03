import {RemovalPolicy, Stack, StackProps} from "aws-cdk-lib";
import {Code, LayerVersion, Runtime, Architecture} from "aws-cdk-lib/aws-lambda";
import {Construct} from "constructs";
import path from "path";
import {PythonLayerVersion} from "@aws-cdk/aws-lambda-python-alpha";

export class TrialCdkLayersStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TrialCdkLayersQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new LayerVersion(this, "TestLayer", {
      layerVersionName: "TrialCdkLayerVersion",
      removalPolicy: RemovalPolicy.RETAIN,
      code: Code.fromAsset(path.join(__dirname, "../src"))
    });

    new PythonLayerVersion(this, "TestPythonLayer", {
      entry: "aaa/python",
      layerVersionName: "TrialCdkPythonLayerVersion",
      compatibleRuntimes: [Runtime.PYTHON_3_12],
      compatibleArchitectures: [Architecture.ARM_64],
      removalPolicy: RemovalPolicy.RETAIN
    });
  }
}
