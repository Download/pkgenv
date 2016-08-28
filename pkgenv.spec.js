var log = require('picolog');
var pkgcfg = require('pkgcfg');
var pkgenv = require('./pkgenv');
var expect = require('chai').expect;

describe('pkgenv(pkg, node, name, defaultValue)', function(){
	it('is a function', function(){
		expect(pkgenv).to.be.a('function');
	});

	it('registers itself with `pkgcfg` under tag {env}', function(){
		expect(pkgcfg.registry.getTransform('env')).to.equal(pkgenv);
	});

	describe('{env (name, defaultValue)}', function(){
		var pkg = pkgcfg();

		// "env-with-name": "{env PATH}",
		it('Returns the environment variable with the given name', function(){
			expect(pkg.test['env-with-name']).to.equal(process.env.PATH);
		});

		// "undefined-env": "{env SOME_UNDEFINED_ENV}",
		it('Returns empty string when the env var is not defined and no defaultValue is given', function(){
			expect(pkg.test['undefined-env']).to.equal('');
		});

		// "undefined-env-with-default": "{env ('SOME_UNDEFINED_ENV', 'default-value')}",
		it('Returns the given default value when the environment variable is not defined', function(){
			expect(pkg.test['undefined-env-with-default']).to.equal('default-value');
		});

		// "node-env": "{env}",
		it('Returns the NODE_ENV env var when no name is given, or empty string.', function(){
			expect(pkg.test['node-env']).to.equal(process.env.NODE_ENV || '');
		});

		// "ref-env": "{env {pkg test.data.env}}"
		it('Returns the environment variable with the referenced name', function(){
			expect(pkg.test['ref-env']).to.equal(process.env.PATH);
		});
	});
});
