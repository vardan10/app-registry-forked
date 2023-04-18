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
const config = require('../../config');

const getNestedFilesByName = async (directory, filenames) => {
	const entries = await fs.readdir(directory);
	const appJsonPaths = [];
	for (const entry of entries) {
		const entryPath = path.join(directory, entry);
		const entryStat = await fs.stat(entryPath);
		if (entryStat.isDirectory()) {
			const nestedFilePaths = await getNestedFilesByName(entryPath, filenames);
			appJsonPaths.push(...nestedFilePaths);
		} else if (filenames.includes(entry)) {
			appJsonPaths.push(entryPath);
		}
	}

	return appJsonPaths;
}

const getDirectories = async (directory) => {
	try {
		const files = await fs.readdir(directory);
		const subdirectories = [];

		for (const file of files) {
			const filePath = path.join(directory, file);
			const stat = await fs.stat(filePath);

			if (stat.isDirectory()) {
				subdirectories.push(filePath);
			}
		}

		return subdirectories;
	} catch (err) {
		throw new Error(`Error getting subdirectories in ${directory}: ${err}`);
	}
}

const getNetworkDirs = async (rootDir) => {
	const subDirs = await getDirectories(rootDir);
	const networkDirs = subDirs.filter((dirPath) => config.networkDirs.some((entry) => dirPath.endsWith(entry)));

	return networkDirs;
}

const readJsonFile = async (filePath) => {
	const fileContent = await fs.readFile(filePath, 'utf-8');
	const data = JSON.parse(fileContent);
	return data;
}

const readFileLinesToArray = async (filePath) => {
	try {
		const data = await fs.readFile(filePath, 'utf8');
		const lines = data.split(/\r?\n/);
		const filteredLines = lines.filter((line) => {
			// Ignore empty lines containing just spaces
			if (/^\s*$/.test(line)) {
				return false;
			}
			// Ignore comments starting with // or #
			if (/^(\/\/|#)/.test(line)) {
				return false;
			}
			return true;
		});
		return filteredLines;
	} catch (error) {
		console.error(`Error reading file: ${error}`);
		return [];
	}
}


module.exports = {
	getNestedFilesByName,
	getDirectories,
	getNetworkDirs,
	readJsonFile,
	readFileLinesToArray,
}
