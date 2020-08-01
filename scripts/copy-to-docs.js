const ncp = require('ncp').ncp;
const path = require('path');
const appName = require('../package.json').name;
const sourceFolderName = path.resolve(__dirname, `../dist/${appName}`);
const targetFolderName = path.resolve(__dirname, '../docs');

ncp(sourceFolderName, targetFolderName);