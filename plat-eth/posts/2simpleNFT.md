---
title: "🎟 Simple NFT Example"
subtitle: "Create a simple NFT to learn basics of 🏗 Scaffold-ETH 2."
data: "2024-04-20"
---

# Checkpoint 1: ⛽️ Gas & Wallets 👛

So the first step is connecting your burner wallet. What does that even mean really?
What is a wallet? What is a burner wallet? We'll cover those later, but first we will
cover **accounts**, which is what wallets hold.

## Accounts

What are accounts? There are two types of accounts, and you've interacted with both
by connecting your burner wallet! The first kind is an externally owned account, or
EOA for short, and the second kind are smart contracts.

Accounts are a fundamental concept for blockchains, so fundamental that the Ethereum
network can be boiled down in one sentence using accounts:

> A network of accounts sending transactions to each other.

<details>
  <summary>Can you guess what type of account you connected your wallet to? (click for answer)</summary>

A smart contract account! You connected to it so you can grab funds. Or rather, request that
the smart contract give you funds through a transaction.

</details>

How should we explain and remember EOAs? Think of them as train stations, they have a lot in common.

Wait, send trains? EOAs can't send trains they arn't even a physical construct. You are
right, but I will extend the analogy of EOAs as train stations, to transactions being
trains. And smart contracts will be autonamous factories! When you give yourself funds
from the faucet you connected to, picture this:

> A train station (you) sends a train (trainsaction) carrying instructions to the factory (the smart contract). The factory executes the instructions, and sends you back a train full of money!

As stated earlier, almost everything is either a train station, or a factory, and they
all communicate and trade using trains! Now lets zoom in on EAOs to see how they work.

---

# Checkpoint 2: 🖨 Minting

Think of Ethereum accounts as buildings on a block. There are two sorts of accounts,
normal accounts and smart contract accounts. Normal accounts are for holding value
and are also known as EOAs (Externally Owned Accounts), because they are owned by
humans. This section is about EOAs. EOAs can be thought of as train stations.

Why? The Ethereum ecosystem is a network of accounts interacting with each other
through transactions. Think of transactions as trains, or trainsactions.

---

# Checkpoint 3: 💾 Deploy your contract! 🛰

An account is a concept defined by five attributes:

1. A private key
2. A public key
3. An address
4. A balance
5. A nonce

Accounts are train stations, because you use them to send transctions (trainsactions)
to other accounts.

- Mrs. Private Key
  A private key lady who signs transactions and takes care of paper work

- Ms. Public Key
  An outgoing lady who verifies transactions

The train station is located at a certain **address**
The train station also has a balance of tokens
The train station has a nonce, or a record of how many trains have passed through it

<!-- ![A train station](http://localhost:3000/images/train-station.svg) -->
