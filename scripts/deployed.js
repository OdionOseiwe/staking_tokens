require("dotenv").config({ path: ".env" });
const { ethers } = require("hardhat");


async function main() {
  
    console.log("deployed....");
    const Stakingtoken = await ethers.getContractFactory("stakingToken");
    const stakingtoken = await Stakingtoken.deploy();

    await stakingtoken.deployed();

    console.log("this is deployed to", stakingtoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});