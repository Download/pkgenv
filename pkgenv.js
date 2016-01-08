var pkgcfg = require('pkgcfg');

function pkgenv(pkg, node, name, defaultValue) {
	if (! name) {name = 'NODE_ENV'};
	name = name.trim();
	var result = process.env[name] || defaultValue;
	if (result === undefined) {throw new pkgcfg.QuietError('No environment variable found named ' + name);}
	return result;
}

pkgcfg.registry.register('env', pkgenv);

module.exports = pkgenv;
