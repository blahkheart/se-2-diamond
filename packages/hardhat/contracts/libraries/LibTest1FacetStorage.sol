// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Test1FacetStorage {
    // tracks if an address has updated the count before or now
    mapping(address => bool) hasCounted;
    uint256 count;
}

library LibTest1FacetStorage {
    function diamondStorage() internal pure returns (Test1FacetStorage storage ds) {
        // Specifies a random position from a hash of a string
        bytes32 storagePosition = keccak256("diamond.storage.LibTest1FacetStorage");
        // Set the position of our struct in contract storage
        assembly {
            ds.slot := storagePosition
        }
    }


}