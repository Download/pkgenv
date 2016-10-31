var log; try {log = require('ulog')('pkgenv')} catch(e){}

var pkgcfg = require('pkgcfg');

function pkgenv(pkg, node, name, defaultValue) {
	if (!name) {name = 'NODE_ENV'}
	if (!defaultValue) {defaultValue = ''}
	if (log) { 
		if (!process.env[name]) {
			log.log(log.name + ': environment variable ' + name + 
					' is not set, defaulting to "' + defaultValue + '"')
		}
		else {
			log.log(log.name + ': ' + name + '=' + process.env[name])
		}
	}
	return process.env[name] || defaultValue;
}

pkgcfg.registry.register('env', pkgenv);
module.exports = pkgenv;

log && log.log('Initialized ' + log.name)
