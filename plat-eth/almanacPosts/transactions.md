---
title: "Transactions"
subtitle: "Who makes transactions? What are their purpose?"
data: "2024-04-22"
---

Transations are like trains. They carry things from one place to another.
But what do they carry? How do they know where to go? Are there different
kinds of trains? How do they start? All of these will be answered in this
article.

There are three kinds of trainsactions. We will cover the things they
have in common, then get into the differences.

# Cargo

Transactions carry a few different things, in a few different cars.

### Signature

The identifier of the sender. This is generated when the sender's private
key signs the transaction and confirms the sender has authorized this transaction.

### Nonce

A sequentially incrementing counter which indicates the transaction number from the account

### Value

Amount of ETH to transfer from sender to recipient (denominated in WEI, where 1ETH equals 1e+18wei)

### Input Data

Optional field to include arbitrary data.

# Navigation

### From Address

Where the train is from.

### To Address

Where the train is going.

# Types of Transactions

Remember how we said Ethereum is network of accounts sending transactions to each other?
Well these transactions look slightly different depending on the type.

- Regular transactions
- Contract execution transaction
- Contract deployment transaction

---

Work in progress

---
