/*
 * Copyright © 2023 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

const fs = require('fs').promises;
const path = require('path');
const config = require('../config');
const { getDirectories } = require('./shared/utils')

async function validateConfigInDir(directory) {
	try {
		const files = await fs.readdir(directory);

		if (!files.includes('app.json') || !files.includes('nativetokens.json')) {
			throw new Error(`Files 'app.json' and 'nativetokens.json' are not present in directory ${directory}.`);
		}
	} catch (err) {
		throw new Error(`Error reading directory ${directory}: ${err}`);
	}
}

async function validateAllConfigFilesForDir(rootFolder) {
	try {
		const appDirs = await getDirectories(rootFolder);
		for (const appDir of appDirs) {
			await validateConfigInDir(appDir);
		}
	} catch (err) {
		throw new Error(`Error: ${err}`);
	}
}

async function validateAllConfigFiles(networkDirs) {
	for (const networkDir of networkDirs) {
		await validateAllConfigFilesForDir(networkDir);
	}
}

module.exports = {
	validateAllConfigFiles,
}
