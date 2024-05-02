---
title: "Smart Contracts"
subtitle: "How are they built? How do they opperate?"
data: "2024-04-22"
---

The second type of account is a **smart contract account**, also known a simply "smart contract".
Smart contracts are like factories because they take in material, and do things with that
material.

# 🎟 Simple NFT Example

Smart contracts are executable code that is stored at a particular **address** on the blockchain.
They inhabit the same "plane of existence" as train stations.

Remember the **data input** cart from the trainsaction section? Part of the input data specifies
which sections of the executable code to run.

The smart contract has the following relevant attributes that will be used to explain the flow
of the whole challenge:

### Address

Just like train stations, factories have addresses too. Addresses are a way of organizing accounts
so that users can immidiately distinguish them from one another.

### Code Hash

<!-- Where is this executable code stored exactly? The code is stored under the transaction that deployed
the smart contract. See? Even a contract deployment is a transaction.  -->

<!-- From chatGPT (on bytecode and code hash):

The bytecode of a smart contract is stored on the blockchain itself, specifically in the transaction that deploys the contract. When a contract is deployed, the transaction includes the bytecode of the contract as part of its data. This bytecode is then stored on the blockchain along with the transaction information.

Once deployed, the bytecode is not stored in the contract's storage. Instead, it is stored in a special location on the blockchain that is associated with the contract's address. This allows other contracts and applications to access the bytecode when needed, such as when verifying the code hash of the contract.

not chat GPT: So the code hash is just a hash of the code that serves as a unique identifier for the contract's bytecode

-->

### Nonce

---

Under construction

---
