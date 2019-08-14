
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
    
    it('calculate one block', async function() {
        const initialBlock = await this.mmr.nblock();
        await this.mmr.calculate();
        const newBlock = await this.mmr.nblock();
        
        assert.equal(newBlock.toNumber(), initialBlock.toNumber() + 1);
        
        const hash = await this.mmr.hashes(0);
        
        assert.notEqual(hash, 0);
        
        for (let k = 1; k < 64; k++) {
            const hash = await this.mmr.hashes(k);
            
            assert.equal(hash, 0);
        }
    });
});

