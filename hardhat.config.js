// require("@nomiclabs/hardhat-waffle");    // redundant - replaced by toolbox
// require('@nomiclabs/hardhat-ethers');    // redundant - replaced by toolbox
// require("@nomiclabs/hardhat-etherscan"); // redundant - replaced by toolbox

require("@nomicfoundation/hardhat-toolbox")
require('@openzeppelin/hardhat-upgrades');

const fs = require('fs');
const MAINNET_PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();
const TESTNET_PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();

const ALCHEMY_API_KEY = "";
const ETH_ALCHEMY_API_KEY = "";
const SEPOLIA_ALCHEMY_API_KEY = "";
const YOUR_BASESCAN_API_KEY = "";
const YOUR_BSC_API_KEY = "";


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      // evmVersion: 'london'
    }
  }, 
  networks: {
    mainnet: {
      // url: `https://goerli.infura.io/v3/3f6bc0d4637344c8b7efd24e118a5c45`,
      url: `https://eth-mainnet.g.alchemy.com/v2/${ETH_ALCHEMY_API_KEY}`,
      // url: `https://rpc.ankr.com/eth_goerli`,
      accounts: [MAINNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 17000000000,
    },
    baseSepolia: {
      // url: `https://goerli.infura.io/v3/3f6bc0d4637344c8b7efd24e118a5c45`,
      url: `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      // url: `https://rpc.ankr.com/eth_goerli`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 20000000000,
    },
    avalancheFujiTestnet: {
      // url: `https://api.avax-test.network/ext/bc/C/rpc`,
      url: `https://rpc.ankr.com/avalanche_fuji`,
      accounts: [TESTNET_PRIVATE_KEY]
    },
    avalanche: {
      url: `https://rpc.ankr.com/avalanche`,
      accounts: [MAINNET_PRIVATE_KEY],
      gasPrice: 25000000000,
    },
    bsc: {
      url: `https://bsc-dataseed1.binance.org/`,
      accounts: [MAINNET_PRIVATE_KEY],
      gasPrice: 1000000000,
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
    },
    fxTestnet: {
      url: `https://testnet-fx-json-web3.functionx.io:8545`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 600000000000,
    },
    fxMainnet: {
      url: `https://fx-json-web3.functionx.io:8545`,
      accounts: [MAINNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 505000000000,
    },
    base: {
      url: `https://base-mainnet.g.alchemy.com/v2/LwAW4pwnUIE80YuOci67AsBBdwF2oxlK`,
      accounts: [MAINNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 12384160
    },
    baseGoerli: {
      url: `https://base-goerli.g.alchemy.com/v2/0rlfROQf6WspqF9xY-7aFz4tgB089NAn`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 150000000,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_ALCHEMY_API_KEY}`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 10000000000,
    },
    local: {
      url: `http://0.0.0.0:8545/`,
      // url: `http://192.168.1.106:8545/`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      // gasPrice: 507500000000,
    },
    zetaAthenTestnet: {
      // url: `http://127.0.0.1:8545/`,
      url: `https://zetachain-athens-evm.blockpi.network/v1/rpc/public`,
      accounts: [TESTNET_PRIVATE_KEY],
      networkCheckTimeout: 999999,
      timeoutBlocks: 200,
      gas: 12400000,
      gasPrice: 17,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: "YOUR_ETHERSCAN_API_KEY",
      optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      arbitrumOne: "YOUR_ARBISCAN_API_KEY",
      bscTestnet: "YOUR_BSCSCAN_API_KEY",
      bsc: YOUR_BSC_API_KEY,
      avalancheFujiTestnet: "YOUR_SNOWTRACE_API_KEY", 
      avalanche: "YOUR_SNOWTRACE_API_KEY",
      baseGoerli: YOUR_BASESCAN_API_KEY,
      base: YOUR_BASESCAN_API_KEY,
      baseSepolia: YOUR_BASESCAN_API_KEY
    },
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      },
      // {
      //   network: "base",
      //   chainId: 8453,
      //   urls: {
      //     apiURL: "https://api.basescan.org/api",
      //     browserURL: "https://basescan.org"
      //   }
      // },
    ]
  },
  mocha: {
    timeout: 40000
  }
};
