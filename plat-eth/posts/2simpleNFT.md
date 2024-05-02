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

This is where the fun begins! Its time to mint some NFTs and see whats going on. When you click
"Mint Item" what actually happens? How do the NFTs just pop up on your user interface?

By clicking "Mint Item", you are sending a **transaction** to a **smart contract**, that then mints
an NFT, and sends you that NFT back in a transaction. Once the NFT is in your account, you can see it
pop up.

Of course there's more going on here than just that, so lets first explore **transations**, then
look at **smart contracts**. After explaining those, we'll walk through all the steps between
"Mint Item" and seeing the NFT on your user interface.

### [Transactions](/almanacPosts/transactions)

Anything sent between accounts are transactions. We know they use gas, but what else is relevant for us
to know within the context of this challenge?

### [Smart Contracts](/almanacPosts/smartContracts)

A smart contract is a kind of account that gets deliveries from trains, and does things with those
deliveries. Smart contracts are so versatile, just like factories!

---

# Checkpoint 3: 💾 Deploy your contract! 🛰

<!-- ![A train station](http://localhost:3000/images/train-station.svg) -->
