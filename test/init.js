mocha.ui('bdd')
mocha.reporter('html')
expect = chai.expect

describe('abrest', function() {
    it('should be attached to the global scope by default', function () {
        expect(abrest).to.not.be.undefined
    })
})


if (window.mochaPhantomJS) {
    mochaPhantomJS.run()
}
else {
    mocha.run()
}
