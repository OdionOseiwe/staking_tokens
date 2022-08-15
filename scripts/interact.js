const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const ContractAddress = "0x1E5aae2969b8F6F79d35420723CbA7891b5e915F";

    const Stakingtoken = await ethers.getContractAt("Istakingtoken", ContractAddress);

    const amount = ethers.utils.parseEther("0.00000000000001")
    
    const staker = "0x5D63564EeF4657F360343196A7bd86ae18d3a92A";

    await Stakingtoken.staking(1, { value: amount });
    
    const bal = await Stakingtoken.contractBalance();
    console.log("this is the balance", bal);

    const details = await Stakingtoken.stakerDetails(staker);

    console.log("details", details);

    await Stakingtoken.withdraw();
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
