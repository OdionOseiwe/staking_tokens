// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface Istakingtoken {
    struct Details {
        address Staker;
        uint256 amount;
        uint256 time;
        bool staked;
    }

    function staking(uint256 _time) external payable;

    function withdraw() external;

    function contractBalance() external view returns (uint);

    function stakerDetails(address staker)
        external
        view
        returns (Details memory);

    function calFianalReward(address staker) external view returns (uint);
}
