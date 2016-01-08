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

	describe('{env}', function(){
		var pkg = pkgcfg();
		
		// "undefined-env": "{env SOME_UNDEFINED_ENV}",
		it('Returns the original tag when the environment variable is not defined', function(){
			expect(pkg.test['undefined-env']).to.equal('{env SOME_UNDEFINED_ENV}');
		});
		
		// "undefined-env-with-default": "{env ('SOME_UNDEFINED_ENV', 'default-value')}",
		it('Returns the given default value when the environment variable is not defined', function(){
			expect(pkg.test['undefined-env-with-default']).to.equal('default-value');
		});
		
		// "node-env": "{env}",
		it('Returns the NODE_ENV environment variable when no name is given', function(){
			expect(pkg.test['node-env']).to.equal(process.env.NODE_ENV || '{env}');
		});
		
		// "other-env": "{env PATH}",
		it('Returns the environment variable with the given name', function(){
			expect(pkg.test['other-env']).to.equal(process.env.PATH || '{env PATH}');
		});
		
		// "ref-env": "{env {pkg test.data.env}}"
		it('Returns the environment variable with the referenced name', function(){
			expect(pkg.test['ref-env']).to.equal(process.env.PATH || '{env {pkg test.data.env}}');
		});
		
	});
});