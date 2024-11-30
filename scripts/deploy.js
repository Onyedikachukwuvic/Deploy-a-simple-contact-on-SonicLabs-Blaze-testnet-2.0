const hre = require("hardhat");

async function main() {
  console.log("Deploying TestStorage contract...");

  const TestStorage = await hre.ethers.getContractFactory("TestStorage");
  const testStorage = await TestStorage.deploy();

  console.log("Waiting for deployment transaction...");
  await testStorage.waitForDeployment();

  const deployedAddress = await testStorage.getAddress();
  console.log("TestStorage deployed to:", deployedAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });