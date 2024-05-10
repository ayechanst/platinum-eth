---
title: "Smart Contracts"
subtitle: "How are they built? How do they opperate?"
data: "2024-04-22"
---

![factory banner](/images/factory-banner.svg)

> Smart contracts are **executable code** that is stored at a particular **address** on the blockchain.

# 🎟 Simple NFT Example

For challenge 0, we will look at the two core components that define a smart contract: an **address**
and **executable code**.

### Address

Similarly to EOAs, smart contracts also have an address. In general, addresses are a way of differentiating
accounts.

### Byte Code (Executable Code)

The executable code is called the **byte code**, and it's just a higher level language such as Solidity that
has been compiled into machine code.

Think of the byte code as machines inside the factory.

<!-- Where is this executable code stored exactly? The code is stored under the transaction that deployed
the smart contract. See? Even a contract deployment is a transaction.  -->

<!-- From chatGPT (on bytecode and code hash):

The bytecode of a smart contract is stored on the blockchain itself, specifically in the transaction that deploys the contract. When a contract is deployed, the transaction includes the bytecode of the contract as part of its data. This bytecode is then stored on the blockchain along with the transaction information.

Once deployed, the bytecode is not stored in the contract's storage. Instead, it is stored in a special location on the blockchain that is associated with the contract's address. This allows other contracts and applications to access the bytecode when needed, such as when verifying the code hash of the contract.

not chat GPT: So the code hash is just a hash of the code that serves as a unique identifier for the contract's bytecode

-->

---

Under construction

---
