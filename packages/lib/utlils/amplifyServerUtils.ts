import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import awsconfig from "../../../apps/whatuni/configs/amplifyconfiguration";
export const { runWithAmplifyServerContext } = createServerRunner({
  config: awsconfig,
});
