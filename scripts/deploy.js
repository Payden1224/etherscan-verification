const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});

async function main() {
  const verifyContract = await ethers.getContractFactory("Verify");

  // deploy the contract

  const deployedVerifyContract = await verifyContract.deploy();

  await deployedVerifyContract.deployed();

  // print the address of the deployed contract
  console.log("Verify Contract Address:", deployedVerifyContract.address);

  console.log("Sleeping....");

  // Wait for etherscan to notice that the contract has been deployed

  await SVGFEDisplacementMapElement(40000);

  // Verify the cotract after deploying
  await hre.run("verify:verify", {
    address: deployedVerifyContract.address,
    constructorArguments: [],
  });
}
