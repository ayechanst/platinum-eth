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

> BUT WAIT! I connected my **wallet** to get funds, not my **account**.

Don't worry, your account is "in" your wallet. Your wallet is like a protective shell for your accounts.

### [Externally Owned Accounts](/almanacPosts/eoa)

It's an account where your funds for gas will be stored. It's like a home base.

---

# Checkpoint 1: ⛽️ Gas & Wallets 👛

So we want to load our wallets (which we now know actually loads our EOA) with funds to pay for gas.

### [Wallets](/almanacPosts/wallets)

Why did we use a wallet instead of directly using our EOA?

### [Gas](/almanacPosts/gas)

Gas for transactions in Ethereum is just like fuel for a train. It's useful to think of gas in this
way, but of course transactions don't use gas the same way a train would. So what is **gas**?

---

# Checkpoint 2: 🖨 Minting

This is where the fun begins! Its time to mint some NFTs and see whats going on. When you click
"Mint Item" what actually happens? How do the NFTs just pop up on your user interface?

By clicking "Mint Item", you are sending a **transaction** to a **smart contract**, that then mints
an NFT, and sends you that NFT back in a transaction. Once the NFT is in your account, you can see it
pop up.

Of course there's more going on here than just that, so lets first explore **transations**, then
look at **smart contracts**, and briefly cover what **NFTs** are. After explaining those, we'll walk
through all the steps between "Mint Item" and seeing the NFT on your user interface.

### [Transactions](/almanacPosts/transactions)

Anything sent between accounts are transactions. We know they use gas, but what else is relevant for us
to know within the context of this challenge?

### [Smart Contracts](/almanacPosts/smartContracts)

A smart contract is a kind of account that gets deliveries from trains, and does things with those
deliveries. Smart contracts are so versatile, just like factories!

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
