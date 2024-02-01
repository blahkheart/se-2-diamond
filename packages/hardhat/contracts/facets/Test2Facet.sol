// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../libraries/LibAppConstants.sol";

// @dev This Facet demonstrates reading and writing to a specific facet's storage 
contract Test2Facet {

    uint256 private count = 0;
    event TestEvent(address something);

    function writeFacetStorage() external {
        require(count < AppConstants.MAX_COUNT, "Maxed Out!!!");
        count++;
        emit TestEvent(address(this));
    }

    function readFacetStorage() external view returns (uint256){
        return count;
    }
}