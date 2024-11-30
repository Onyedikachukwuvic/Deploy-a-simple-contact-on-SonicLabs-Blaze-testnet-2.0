// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TestStorage {
    uint256 private number;
    
    function store(uint256 _number) public {
        number = _number;
    }
    
    function retrieve() public view returns (uint256) {
        return number;
    }
    
    function increment() public {
        number += 1;
    }
}