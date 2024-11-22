import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "../../../apps/whatuni/configs/amplifyconfiguration.json";
export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});
