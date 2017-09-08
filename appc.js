/**
 * .framework files should be in [projectRoot]/src
 */
module.exports = {
	hyperloop: {
		ios: {
			xcodebuild: {
				flags: {
					FRAMEWORK_SEARCH_PATHS: '../../src',
					LD_RUNPATH_SEARCH_PATHS: '@executable_path'
				},
				frameworks: [
					'AWSDK',
					'AWOpenSSL'
				]
			},
			thirdparty: {
				'AWSDK': {
					source: ['src'],
					header: 'src',
					resource: 'src'
				},
				'AWOpenSSL': {
					source: ['src'],
					header: 'src',
					resource: 'src'
				}
			}
		}
	}
};