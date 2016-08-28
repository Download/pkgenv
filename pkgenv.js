var pkgcfg = require('pkgcfg');

function pkgenv(pkg, node, name, defaultValue) {
	if (!name) {name = 'NODE_ENV'}
	if (!defaultValue) {defaultValue = ''}
	return process.env[name] || defaultValue;
}

pkgcfg.registry.register('env', pkgenv);
module.exports = pkgenv;
