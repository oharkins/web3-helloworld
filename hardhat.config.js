/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.27",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
        url: process.env.API_URL+process.env.API_KEY,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
   },
}