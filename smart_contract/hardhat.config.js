require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/l3h6ppZTX5pN_yKRQAgGhRe7fOKDSb3U',
      accounts: ['7484b202fba2fe21ab61ce040b77ea20f23992df9227cc3711c77655f06f19be'],
    },
  },
};