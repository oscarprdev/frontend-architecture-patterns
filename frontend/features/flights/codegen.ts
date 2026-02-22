import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '../../../backend/schema.graphql',
	documents: ['src/infra/**/*.graphql', 'src/infra/**/*.gql'],
	ignoreNoDocuments: true,
	generates: {
		'./src/infra/generated/': {
			preset: 'client',
		},
	},
};

export default config;
