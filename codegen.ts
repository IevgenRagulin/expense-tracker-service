import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "src/generated/types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;