var log = require('ulog')('pkgenv')

var pkgcfg = require('pkgcfg');

function env(root, parents, node, name, defaultValue) {
	if (!name) {name = 'NODE_ENV'}
	if (!defaultValue) {defaultValue = ''}
		if (!process.env[name]) {
			log.debug(log.name + ': environment variable ' + name + 
					' is not set, defaulting to "' + defaultValue + '"')
		}
		else {
			log.debug(log.name + ': ' + name + '=' + process.env[name])
		}
	return process.env[name] || defaultValue;
}

pkgcfg.registry.register('env', env);
module.exports = env;

log.debug('Initialized ' + log.name)
