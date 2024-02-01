# 🏗 Scaffold-ETH-2 Diamond

A simple template to help you deploy ERC2535 (Diamond Standard) upgradable smart contracts easily using Scaffold-eth 2.



![Debug Diamond tab](https://github.com/blahkheart/se-2-diamond/blob/main/packages/nextjs/public/assets/debug-diamond.png?raw=true)

## Requirements

Before you begin, ensure you have the following tools installed on your machine:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH-2 Diamond, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/blahkheart/se-2-diamond.git
cd se-2-diamond
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys test smart contracts to the local network. The contracts are located in `packages/hardhat/contracts` and can be modified to suit your needs. It is highly recommended to use the naming convention `DiamondContract` as in `MyAwesomeDiamondContract` when naming diamond contracts, and `Facet` as in `CoolNewFacet` when naming diamond facets. The `yarn deploy` command uses the deploy scripts located in `packages/hardhat/deploy` to deploy the contracts to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your diamond smart contract using the `Debug Diamond` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your diamond smart contract `YourDiamondContract.sol` in `packages/hardhat/contracts`
- Edit your diamond facets in `packages/hardhat/contracts/facets`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
