// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

interface IUniversalRewardsDistributor {
    function claim(address account, address reward, uint256 claimable, bytes32[] calldata proof) external returns (uint256 amount);
}