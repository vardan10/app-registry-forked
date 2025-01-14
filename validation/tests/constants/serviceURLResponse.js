const serviceURLSuccessRes = {
	status: 200,
	data: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '03000000',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '03000000',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const serviceURL500Res = {
	status: 500,
	data: {
		data: {
			message: 'Server error',
		},
	},
};

const serviceURLIncorrectRes = {
	status: 200,
	data: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '03000001',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '03000001',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const serviceURLSuccessResWs = {
	_channel: {
		invoke() {
			return { chainID: '03000000' };
		},
	},
};

const serviceURLIncorrectResWs = {
	_channel: {
		invoke() {
			return { chainID: '04000000' };
		},
	},
};

module.exports = {
	serviceURLSuccessRes,
	serviceURL500Res,
	serviceURLIncorrectRes,
	serviceURLSuccessResWs,
	serviceURLIncorrectResWs,
};
