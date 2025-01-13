// SPDX-License-Identifier: MIT
import {IERC4626} from "@openzeppelin/contracts/interfaces/IERC4626.sol";

pragma solidity >=0.6.0 <0.9.0;

interface IMoonwellFlagship is IERC4626 {
    function balanceOf(address user) external view returns (uint256);
}