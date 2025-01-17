---
title: Deploy Your Contract
slug: /getting-started/deploy-your-contract
---

Now that we have generated the Wasm binary from our source code and started a Substrate Smart Contracts node, we want to deploy this contract onto our blockchain.

Smart contract deployment on Substrate is a little different than on traditional smart contract blockchains.

Whereas a completely new blob of smart contract source code is deployed each time you push a contract on other platforms, Substrate opts to optimize this behavior. For example, the standard ERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the initial configuration (through the Solidity `constructor` function). Each of these instances take up space on the blockchain equivalent to the contract source code size, even though no code was actually changed.

In Substrate, the contract deployment process is split into two halves:

1. Putting your code on the blockchain
2. Creating an instance of your contract

With this pattern, contract code like the ERC20 standard can be put on the blockchain a single time, but instantiated any number of times. No need to continually upload the same source code over and waste space on the blockchain.

## Putting Your Code on the Blockchain

Here we will upload the contract code and instantiate one copy of the contract on the blockchain:

- Click the **Upload & Instantiate Contract** button.
- Choose an **Instantiation account** (e.g. ALICE).
- Give the contract a descriptive **Name** (e.g. Flipper Contract).
- Drag the `flipper.contract` file that contains the bundled Wasm blob and metadata into the drag
& drop area. You will see the UI parse the metadata and showing what functions the contract contains.
- Click the **Constructor Details**

![Contracts code page for deploying Flipper](./assets/flipper-code-page.png)

Smart contracts exist as an extension of the account system on the blockchain. Thus creating an
instance of this contract will create a new `AccountId` which will store any balance managed by the
smart contract and allow us to interact with the contract.

Now a screen displays the information that represents our smart contract. We are going to
instantiate a copy of the smart contract:

- Give the contract instance a **Contract Name** (e.g. The First Flipper).
- Accept the default options for the contract **Instantiation Constructor**.
- Accept the default options **Endowment** of `1000 Units` to pay the storage rent, and **Max Gas Allowed** of `200000`.
- Click on `Instantiate`

![An image of events from Flipper code upload](./assets/flipper-upload-events.png)

> **Note:** As mentioned earlier, contract creation involves creation of a new account. As such, you
must be sure to give the contract account at least the existential deposit defined by your
blockchain. If we consume all of this deposit, the contract will be evicted. We can always refill the contract's balance and
keep it on chain.

When you click **Instantiate**, and in the next confirmation screen **Sign & Submit**, you should see
the extrinsic `contracts.instantiateWithCode` is called, and a flurry of events appear including the
creation of a new account (`system.NewAccount`) and the instantiation of the contract
(`contracts.Instantiated`):

![An image of events from instantiation of Flipper](./assets/flipper-instance-events.png)
