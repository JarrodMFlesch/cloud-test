import { buildConfig } from "payload/config";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});
