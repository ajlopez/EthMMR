pragma solidity >=0.4.21 <0.6.0;

contract MMR {
    uint constant NHASHES = 64;
    
    uint public nblock;
    bytes32[NHASHES] public hashes;
    
    constructor() public {
        nblock = block.number;
    }
    
    function calculate() public {
        bytes32 nhash = blockhash(nblock);
        
        for (uint k = 0; k < NHASHES; k++) {
            if (uint(hashes[k]) == 0) {
                hashes[k] = nhash;
                break;
            }
            
            nhash = keccak256(abi.encodePacked(hashes[k], nhash));
            hashes[k] = 0;
        }
        
        nblock++;
    }
}

