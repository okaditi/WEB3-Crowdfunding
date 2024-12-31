require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/235b57e865d249359ec1aebd2c620c39",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

// address = 0x61ac8E77F96F0a15F2a427f8Aa175d2119eE753f