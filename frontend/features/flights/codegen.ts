import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '../../../backend/schema.graphql',
	documents: ['src/services/**/*.graphql', 'src/services/**/*.gql'],
	ignoreNoDocuments: true,
	generates: {
		'./src/services/generated/': {
			preset: 'client',
		},
	},
};

export default config;
