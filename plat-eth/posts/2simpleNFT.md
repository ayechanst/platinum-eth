---
title: "Challenge 0: 🎟 Simple NFT Example"
subtitle: "Create a simple NFT to learn basics of 🏗 Scaffold-ETH 2."
data: "2024-04-20"
---

Welcome to challenge 0! This challenge is about minting some NFTs for yourself, and we're going
to explain what's going on behind the scenes in this straight-forward challenge.

# Checkpoint 0: The Building Blocks

Web3 can be summarized in this one sentence:

> Ethereum is network of **accounts** sending **transactions** to each other.

Understanding those two fundamental building blocks: **accounts** and **transactions** will help explain
gas and wallets.

**Transactions** are like trains, they allow accounts to send resources and communicate. If transactions
are like trains, then **accounts** must be like train stations!

### [Externally Owned Accounts](/almanacPosts/eoa)

Once you get your funds for gas, the funds will be stored in your externally owned account. It's like
your home base. Click the link to read this section.

> BUT WAIT! I connected my **wallet** to get funds, not my **account**.

Don't worry, your account is "in" your wallet. Your wallet is like a protective shell for your accounts.

---

# Checkpoint 1: ⛽️ Gas & Wallets 👛

We know what an EOA is now, and that our funds are in our EOA, not in a our wallet. So what is a wallet
for then? And what is gas for?

### [Wallets](/almanacPosts/wallets)

A wallet is an off-chain tool that holds **private keys** in order to manage **EOA**s.

### [Gas](/almanacPosts/gas)

Remember those kind checkpoint workers who stopped that theif from stealing? Without gas, your funds
might have gotten stolen!

---

# Checkpoint 2: 🖨 Minting

Cool, so we know why gas and wallets exist. Thanks to our robot butler and the validators, we can
safely send trains and prevent robberies.

EOAs can do simple things like store balances, but how can we do complex things like mint NFTs?
Let's intorduce a new building to our railway network: **Factories**. Smart contracts are like
factories because they take in material, and output a result.

### [Smart Contracts](/almanacPosts/smartContracts)

A smart contract is the other type of account. The difference is that while an EOA can be
represented as a **balance** associated with an **address**, a smart contract is represented as
**executable code** associated with an **address**.

Code is executed by sending a transaction to the smart contract's address. Let's dive in!

### [Transactions](/almanacPosts/transactions)

Trains are a tool to move value around between accounts. But that's not the only thing they can do.
In this challenge, we arn't sending any value. We're minting an NFT, but how can a train do that?
**What** do they carry other than value that allows them to do that?

So let's look at trains now. Go ahead and send a train
now by minting youself an NFT, so we can look at it!

### [NFTs](/almanacPosts/nft)

Non-fungible tokens. There is a lot of information about these on the internet but none that are
Platinum-Eth style.

# From "Mint NFT" to "proud owner of NFT"

Using everything we learned, we will combine concepts to tell the story of a series of transactions
made between your EOA, and the NFT minting smart contract.

<!-- ## 1. Connect wallet

You have private keys managed by your robot butler, and you wanted to mint yourself some NFTs. So
you clicked "connect wallet".

## 2. Get Funds for gas
We recieved funds. -->

## 3. Clicking "Mint NFT"

Relaxing in your train station full of funds, you decide its time to get some NFTs. Your butler
begins to prepare a train.

### 3.1 Train preparation

The butler creates a train along with its three carts: gas, input data, and signature. The machines
inside a factory are public knowledge, so the butler identifies which machines will mint and NFT,
and determines what materials the machine will need.

In this case the function will need your address. The gas cost is then calculated and coal is
shovled into the gas cart. The butler sets the "to" address of the train to the address of the
smart contract, and sets the "from" address to your station's address.

Last, Mrs. Private Key signs paper work declaring this train is coming from your address. The train
is then sent on its way.

### 3.2 Train Journey

The train at some point is inspected by validators. When the private key signature matches your address,
the train is allowed to continue.

### 3.3 Smart Contract Execution

Upon arriving at the factory, the train unloads its **input data** into an input funnel at the top of the
factory. The factory begins processing the data, and identifies the train's instructions are to use the
`mintItem()` machine located in the factory.

The factory prepares this function for use, and loads your address, into the machine.

## 4. Seeing the NFT on you UI

---

# Checkpoint 3: 💾 Deploy your contract! 🛰

<!-- ![A train station](http://localhost:3000/images/train-station.svg) -->
