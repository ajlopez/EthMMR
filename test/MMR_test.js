
const MMR = artifacts.require('./MMR.sol');

contract('MMR', function (accounts) {
    beforeEach(async function () {
        this.mmr = await MMR.new();
    });
    
    it('create with initial values', async function() {
        for (let k = 0; k < 64; k++) {
            const hash = await this.mmr.hashes(k);
            
            assert.equal(hash, 0);
        }
    });
});

