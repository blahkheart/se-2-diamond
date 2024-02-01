// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../libraries/LibAppStorage.sol";
import "../libraries/LibAppConstants.sol";
import "../libraries/LibTest1FacetStorage.sol";


// @title Test1Facet 
/// @author Dannt Thomx
/// @dev This Facet demonstrates reading and writing to Diamond storage 

contract Test1Facet {

  event NewCounter(address indexed counter, uint256 count);
  event Counter(address counter);

  function getMaxCount() external pure returns(uint){
    return AppConstants.MAX_COUNT;
  }

   function getMaxCountPerAddress() external pure returns(uint){
    return AppConstants.MAX_COUNT_PER_ADDRESS;
  }

  function getCount() external view returns(uint){
    Test1FacetStorage storage _facetStorage = LibTest1FacetStorage.diamondStorage();
    return _facetStorage.count;
  }

  function getCountFor(address _user) external view returns(uint){
    AppStorage storage _appStorage = LibAppStorage.diamondStorage();
    return _appStorage.userCounts[_user];
  }

  function getAllCounters() external view returns(address[] memory){
    AppStorage storage _appStorage = LibAppStorage.diamondStorage();
    return _appStorage.allCounters;
  }

  function count() external {
      AppStorage storage _appStorage = LibAppStorage.diamondStorage();
      Test1FacetStorage storage _facetStorage = LibTest1FacetStorage.diamondStorage();
        uint256 currentCount = _facetStorage.count;
        require(currentCount < AppConstants.MAX_COUNT, "Maxed out!");
        require(_appStorage.userCounts[msg.sender] < AppConstants.MAX_COUNT_PER_ADDRESS, "User maxed Out!!!");
        _appStorage.userCounts[msg.sender] = _appStorage.userCounts[msg.sender] + 1; 
        bool hasCounted = _facetStorage.hasCounted[msg.sender];
        if(!hasCounted){
            _facetStorage.count = _facetStorage.count + 1;
            _facetStorage.hasCounted[msg.sender] = true;
            _appStorage.allCounters.push(msg.sender);
            emit NewCounter(msg.sender, currentCount + 1);
            return;
        }
        _facetStorage.count = _facetStorage.count + 1;
        emit Counter(msg.sender);
  }


  function setDev(address dev) external {
    AppStorage storage _appStorage = LibAppStorage.diamondStorage();
    _appStorage.dev = dev;
  }

   function getDev() external view returns (address){
    AppStorage storage _appStorage = LibAppStorage.diamondStorage();
    return _appStorage.dev;
  }


}