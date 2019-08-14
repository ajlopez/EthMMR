pragma solidity >=0.4.21 <0.6.0;

contract MMR {
    uint constant NHASHES = 64;
    
    uint public nblock;
    bytes32[NHASHES] public hashes;
    
    constructor() public {
        nblock = block.number;
    }
    
    function calculate() public {
        hashes[0] = blockhash(nblock);
        nblock++;
    }
}

