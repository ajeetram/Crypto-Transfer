require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/O8Wwwea7NEOabQyAL4JO0IPu1GoBYrx9',
      accounts: ['bda4ff596b486b24fa4007139b4641b79b3c59e0225ab06a2d64f3483bedf8bc'],
    },
  },
};