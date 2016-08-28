var pkgcfg = require('pkgcfg');

function pkgenv(pkg, node, name='NODE_ENV', defaultValue='') {
	return process.env[name] || defaultValue;
}

pkgcfg.registry.register('env', pkgenv);
module.exports = pkgenv;
