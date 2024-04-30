---
title: "🎟 Simple NFT Example"
subtitle: "Create a simple NFT to learn basics of 🏗 Scaffold-ETH 2."
data: "2024-04-20"
---

# Checkpoint 0: The Building Blocks

Web3 can be summarized in this one sentence:

> Ethereum is network of accounts sending transactions to each other.

Before diving into gas and wallets, let's cover those two crucial things: **accounts**, and **transactions**.

There are two types of accounts, and by the end of the challenge you'll have interacted with both!
Start by reading about the first kind of account, then read about transations.

### [Externally Owned Accounts](/almanacPosts/eoa)

This is the account which you're NFTs will be stored in. Read the first section.

### [Transactions](/almanacPosts/transactions)

Anything sent between accounts are transactions. You'll need to learn about transactions to know
how things move around on the blockchain!

---

# Checkpoint 1: ⛽️ Gas & Wallets 👛

Now that we covered the basics of EOAs and transactions, we can go deeper on gas and wallets. Gas powers
the trains, but what is gas really for in blockchain terms? And what is the difference between EOAs and
wallets?

### [Wallets](/almanacPosts/wallets) ![wallet](http://localhost:3000/images/wallet.svg)

Wallets are software (or hardware) that manage your different EOAs. They do this through your private key.
Why can't we manage our own keys?

<!-- Put wallets in the "not part of the blockchain" section of your mind. Wallets are software that
manage your accounts. They are crucial for user experience, so that new people to crypto have an
easier time interacting with the ecosystem. Wallets and accounts are mixed up often as they are
so closley related, Metamask even wrote a short article about the mix-up:
[What's the difference between a wallet and an account?](https://support.metamask.io/hc/en-us/articles/13466457757211-What-s-the-difference-between-a-wallet-and-an-account)

The first kind of account is an externally owned account, or EOA for short. These
accounts are owned by real people, hence the externally owned part. The jargon for
externally owned accounts are EOA, or just accounts. Wallets hold EOAs! -->

### [Gas](/almanacPosts/gas)

Why does gas exist? Why arn't transactions just free, wouldn't that be better?

---

# Checkpoint 2: 🖨 Minting

Once you have your funds, we can start minting! Let's break everything down so we know exactly what is
going on.

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
