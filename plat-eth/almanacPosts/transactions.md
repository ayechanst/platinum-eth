---
title: "Transactions"
subtitle: "Who makes transactions? What are their purpose?"
data: "2024-04-22"
---

Transations are like trains (train-saction). They carry things from one place to another. These
trains can carry different carts depending on their use case.

# 🎟 Simple NFT Example

As soon as we click "Mint Item", our EOA sends a transaction to the **address** of the NFT minting
smart contract. What does our transaction look like in this case?

Our train looks like this:

![trainsaction](/images/train.svg)

Now lets break the train down to its essential cargo.

### Gas ![gas cart](/images/gas-cart.svg)

As we covered, transactions need gas. Can you remember the reasons?

How much gas do we need? How much gas will we pay? The total cost of gas depends on two things:

1. What our input data is doing
2. How much gas costs per unit

Our data cart will instruct the factory to execute different actions. Some actions cost
more units of gas than others. And depending on the transaction, there could be different
amounts of actions to executed. We will cover what these actions are in the smart contract
section.

The same actions will always costs the same amount of gas units. But the price of gas will
fluxuate along with the market, so transactions doing the same thing could cost different
amounts at different times of day.

### ![data cart](/images/data-cart.svg) Input Data

The data cart is like the raw material the factory consumes. There is a lot to unpack
with the data cart, and it will make more sense to cover it in the smart contract
section.

For now just think of the input data as raw material that the factory will change into
something else.

### Signature ![signature cart](/images/signature-cart.svg)

The signature cart holds a big piece of paper with Mrs. Private Key's signature.

### "To" Address

The destination of a train is set in the "to" address. In our case, the "to" address
will be the address of the smart contract.

### "From" Address

The "from" address indicates which train station the train left from. It's also what the
signature is compared to by the validators. As long as the signature corresponds with the
"from" address, the train continues towards the "to" address.

<!-- ### Nonce ![nonce locomotive](/images/nonce.svg)

The nonce is a number (like the one printed on the train) that indicates the number of
trains a train station has sent off. It's another security measure that solves similar
problems to the private key.

Image once again someone is trying to rob your train station of funds. This time they're
more clever about it -->

## Summary

So this is what our train looks like when we send it to the smart contract

<!-- That's it! We'll revisit transactions when its time to mint. [Back to Challenge 0](/posts/2simpleNFT) -->

<!-- There are **three** main kinds of trainsactions. The first kinds are transactions
between EOAs, the second is a transaction from an EOA to a smart contract,
and the third transaction is an EOA deloying a smart contract account.

## 1. Transactions between train stations

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

### 1.3 Gas

The trainsaction needs gas to move. Think of the gas as coal fuel for the train, depicted by
the "G" wagon. Read more about [gas](/almanacPosts/gas) here if you're curious.

## Navigation

---

### 1.4 "To" Address

In the train's cockpit, there is a display that tells the train which train station its heading
to.

### 1.5 "From" Address

On the paper with the signature on it, is a "from address" that indicates which train station the
train is headed from.

- The "from address" is crucial to [node validators](/almanacPosts/nodeValidators) (the space ships
  supervising the construction of blockchains) to prevent fraudulent trains. Node validators use the
  "from address" to decrypt Mrs. Private Key's signature. If the signature and the "from address"
  match up, the train continues onto its destination.
- The "from address" is also important so train stations know who sent them value!

### 1.6 Nonce

Printed on the side of the train is a nonce. A nonce is a number that indicates the current number
of trains a train station has sent. The nonce is important for train stations sending value to
each other, because if I sent several trains to my friend, I want to be sure that the
trains arrive in the correct order to avoid complications.

---

# 2. Transactions from train stations to factories

When you interact with a smart contract, you are sending a trainsaction to it. These trains are different
from trains being sent between train stations.

# 3. Smart Contract Deployment (its a transaction too!)

![Smart Contract Train](http://localhost:3000/images/contractTrain.svg) -->

---

Work in progress

---
