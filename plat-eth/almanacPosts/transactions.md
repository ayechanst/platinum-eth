---
title: "Transactions"
subtitle: "Who makes transactions? What are their purpose?"
data: "2024-04-22"
---

Transations are like trains. They carry things from one place to another.
But what do they carry? How do they know where to go? Are there different
kinds of trains? Where do trains begin?

There are **three** kinds of trainsactions. The first kinds are transactions
between EOAs, the second is a transaction from an EOA to a smart contract,
and the third transaction is an EOA deloying a smart contract account.

# 1. Transactions between train stations

![regular trainsaction](http://localhost:3000/images/train.svg)

Regular transactions happen between two accounts, like when you send your friend some ETH.
These transactions are the most basic and carry the following cargo, which you can track
yourself by looking at the transactions tab under your account's address on [Etherscan](https://etherscan.io/)
and clicking on the transaction hash.

## Cargo

---

### 1.1 Value

Value are the tokens being transfered. The wagon that says "V" on it represents this data field.
If you check [Etherscan](https://etherscan.io/), you'll be able to find a field by clicking on
transactions hashes that displays how much value was sent in the trainsaction.

### 1.2 Signature

The signature is your train station's stamp of approval. It says: "This transaction comes from
from my address and I approve this trainsaction". The wagon is depicted with an "S" on it for
signature. Think of it like a big peice of paper that Mrs. Private Key stamped with a big red
wax seal.

### 1.3 Nonce

Printed on the side of the train is a nonce. A nonce is a number that indicates the current number
of trains a train station has sent. The nonce is important for train stations sending value to
each other, because if I sent several trains to my friend, I want to be sure that the
trains arrive in the correct order to avoid complications.

### 1.4 Gas

The trainsaction needs gas to move. Think of the gas as coal fuel for the train, depicted by
the "G" wagon. Read more about [gas](/almanacPosts/gas) here if you're curious.

## Navigation

---

### 1.5 To Address

In the train's cockpit, there is a display that tells the train which train station its heading
to.

### 1.6 From Address

On the paper with the signature on it, is a "from address" that indicates which train station the
train is headed from.

- The "from address" is crucial to [node validators](/almanacPosts/nodeValidators) (the space ships
  supervising the construction of blockchains) to prevent fraudulent trains. Node validators use the
  "from address" to decrypt Mrs. Private Key's signature. If the signature and the "from address"
  match up, the train continues onto its destination.
- The "from address" is also important so train stations know who sent them value!

# Types of Transactions

Remember how we said Ethereum is network of accounts sending transactions to each other?
Well these transactions look slightly different depending on the type.

- Regular transactions
- Contract execution transaction
- Contract deployment transaction

---

Work in progress

---
