---
title: "Smart Contracts"
subtitle: "How are they built? How do they opperate?"
data: "2024-04-22"
---

![factory banner](/images/factory-banner.svg)

The second type of account is a **smart contract account**, also known a simply "smart contract".
Smart contracts are like factories because they take in material from trains, and do things with that
material. These "factories" come in all shapes, sizes, complexity, simplicity, and usecases.

The Speed Run Ethereum challenges will have you build contracts and exposing you to the many
possiblities of what can be done with smart contracts.

> Smart contracts are **executable code** that is stored at a particular **address** on the blockchain.

They inhabit the same "plane of existence" as train stations.

# 🎟 Simple NFT Example

For challenge 0, we will look at the two core components that define a smart contract: **addresses**
(which you are familiar with), and the **executable code**.

### Address

Train stations use addresses as a unique identifier to store a balance under.

Smart contracts also use addresses, but instead use it to store **code**. When you send a train to
a smart contract, you are setting the train's "to" address to the address of the smart contract.

In general, addresses are just a way of organizing accounts so that users can immidiately distinguish
them from one another.

### Byte Code (Executable Code)

The code a smart contract uses is called the **byte code**. The byte code is a set of instructions
that define how the contract works. Think of the byte code as machines inside the factory.

Remember the **data input** cart from the trainsaction section? Part of the input data specifies
which machines to run. The rest of the input data are the "raw materials" for the factory to
process.

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
