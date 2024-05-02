---
title: "Challenge 0: 🎟 Simple NFT Example"
subtitle: "Create a simple NFT to learn basics of 🏗 Scaffold-ETH 2."
data: "2024-04-20"
---

Welcome to challenge 0! This challenge is about minting some NFTs for yourself, and we're going
to explain what's going on behind the scenes in this straight-forward challenge.

# Checkpoint 0: The Building Blocks

Web3 can be summarized in this one sentence:

> Ethereum is network of accounts sending transactions to each other.

Before diving into gas and wallets, let's cover those two fundamental building blocks: **accounts**,
and **transactions**.

> BUT WAIT! I connected my **wallet** to get funds, not my **account**.

Don't worry, your account is "in" your wallet. Your wallet is like a protective shell for your accounts,
we'll go deeper on wallets in checkpoint 1.

**Transactions** are like trains, they allow accounts to send resources and communicate. If transactions
are like trains, then **accounts** must be like train stations!

### [Externally Owned Accounts](/almanacPosts/eoa)

There are two kinds of accounts, this one is the first. It's an account where your funds for gas will
be stored, as well as your NFTs once you mint them. This account is also where your NFT transaction
will originate, its like a home base!

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

This is where the fun begins!

### [Transactions](/almanacPosts/transactions)

Anything sent between accounts are transactions. You'll need to learn about transactions to know
how things move around on the blockchain!

We can use the words accounts and transactions to describe the Ethereum ecosystem in the most
general sense.

**2. Smart Contracts**

Smart contracts are accounts that no one has access to. They receive train-sactions, and do stuff! No
one is allowed in a smart contract. What other type of building receives "stuff" and returns other
"stuff"? Factories! Fully autonamous factories where no humans are allowed. Think of smart contracts
as factories. Also "smart contract" is jargon for "smart contract account". People don't specify that
they're accounts but just know this in the back of your head:

> Smart contracts are accounts too!

---

# Checkpoint 3: 💾 Deploy your contract! 🛰

<!-- ![A train station](http://localhost:3000/images/train-station.svg) -->
