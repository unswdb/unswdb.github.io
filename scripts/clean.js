const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '..');

sh.rm('-rf', `${destPath}/css/*`);
sh.rm('-rf', `${destPath}/js/*`);

