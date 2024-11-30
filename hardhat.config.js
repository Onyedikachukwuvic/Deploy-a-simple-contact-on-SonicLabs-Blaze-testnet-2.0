require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SONIC_PRIVATE_KEY = process.env.SONIC_PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sonic: {
      url: "https://rpc.blaze.soniclabs.com",
      accounts: SONIC_PRIVATE_KEY ? [SONIC_PRIVATE_KEY] : [],
      chainId: 57054
    }
  }
};