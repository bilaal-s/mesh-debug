import { findAndParseConfig } from "@graphql-mesh/cli";
import { getMesh } from "@graphql-mesh/runtime";
import { cwd } from "process";
import { join } from "path";

const getMeshSchema = async () => {
  const baseDir = cwd();

  const meshConfig = await findAndParseConfig({
    dir: join(baseDir, "v0"),
  });

  return getMesh(meshConfig);
};

export default getMeshSchema();
