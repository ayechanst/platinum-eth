---
title: "🎟 Simple NFT Example"
subtitle: "Create a simple NFT to learn basics of 🏗 Scaffold-ETH 2."
data: "2024-04-20"
---

# Checkpoint 1: ⛽️ Gas & Wallets 👛

The first step to this challenge is connecting your burner wallet so you can grab
funds to pay for gas. Why do we need to connect our wallets and pay for gas? We're
not even driving anywhere. In this checkpoint, we briefly cover the building blocks
of Platinum-Ethereum, then explain what gas and wallets are. If you're feeling antsy
and want to dive deeper under to hood, click the header links to find out more!

## [Accounts](/almanacPosts/accounts) and Transactions

What are accounts? There are two types of accounts, and you've interacted with both
by connecting your burner wallet! If you collected funds already, than you've already
made a transaction! The first kind of account is an externally owned account, or
EOA for short, and the second kind is a smart contract account.

<details>
  <summary>Can you guess what type of account you connected your wallet to? (click for answer)</summary>

> A smart contract account! You connected to it so you can grab funds to pay for gas.

</details>

Let's break everything down, then explain the process that happened when you got your funds.
We can use the words accounts and transactions to describe the Ethereum ecosystem in the most
general sense.

> Ethereum is network of accounts sending transactions to each other.

##### Transactions

Anything sent between accounts are transactions. What do they look like? They are just like trains.
They come from somewhere, they go somewhere, they use fuel, and they carry stuff! In fact, the gas
you're grabbing funds for is the train fuel. Think of transactions as "train-sactions".

##### Externally Owned Account (EOA)

These accounts are controlled by real people, and are the only account that can initiate transactions.
You know what else initiates train-sactions? Train stations! Think of EOAs as train stations. They are
where trains are initiated on their journey across the blockchain!

##### Smart Contract Account (also known simply as: smart contract)

Smart contracts are accounts that no one has access to. They receive train-sactions, and do stuff! No
one is allowed in a smart contract. What other type of building receives "stuff" and returns other
"stuff"? Factories! Fully autonamous factories where no humans are allowed. Think of smart contracts
as factories.

---

<details>
  <summary>Why did the smart contract you connected to not just send you funds automatically?</summary>

> Because only EOAs can initiate transations! Smart contracts are powerful but they need "stuff" sent to them in order for them to send anything back.

</details>

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
