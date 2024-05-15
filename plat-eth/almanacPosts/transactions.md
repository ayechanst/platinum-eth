---
title: "Transactions"
subtitle: "Who makes transactions? What are their purpose?"
data: "2024-04-22"
---

Transactions are like trains (train-saction). They move balances around, but what else can
they do?

# 🎟 Simple NFT Example

![trainsaction](/images/train.svg)

This train above represents the essential cargo of your transaction to the Simple NFT smart
contract: gas, data, and a signature.

Let's explain each cart, but also look directly at what the cart looks like in non-metaphorical
terms!

![transfers tab](/images/transactions-tab.jpg)

Then click on your address to look at all the transactions you've made so far. It should look like
this:

![transfers history](/images/transaction-history.jpg)

As you can see, the first transaction made has a **value** of 1 ETH. We made this transaction so our
account has enough value to cover the price of gas.

The second transaction that was when we clicked the "Mint Item" button. Click on the transaction
hash to see the "Transaction Details". That is what our train looks like.

### ![data cart](/images/data-cart.svg) Input Data

The data cart carries what the smart contract will consume, as well as instructions about which
machine (function) in the factory (smart contract) we want to execute.

![function called](/images/function-called.jpg)

Look familiar?

![function data](/images/function-data.jpg)

But what's up with the data cart? Look's awfully like some bytecode from the smart contract
section. Do the first 8 characters look familiar **(110bcd45)**? The first 4 bytes (8 bits/characters)
of transaction data is always the function selector. In this case its the mintItem() function.

How about **4a39...dc69**? That's my address but on your computer you should see yours. Look at
the "Function called" picture. The first argument the machine needs an **address** to operate.

Now check out **2e51...5871** hexadecimal converted to text. It's QmfVMAmNM1kD... the second argument
that the machine needs to run.

Simply put, the instructions read:

> Factory, when you get this train, get machine **110bcd45** ready. Then feed in **4a39...dc69** and **2e51...5871**.

What's with all the 0's in between? Great question :) this is already low leveled enough for the first
challenge, so we'll keep some goodies for later when it's more appropriate to dive deeper.

### Gas ![gas cart](/images/gas-cart.svg)

Of course, transactions need gas. Can you remember the reasons?
How much gas do we need? How much gas will we pay? The total cost of gas depends on two things:

**1. What function we are calling**

Each opperation in the instructions (the bytecode) has a cost, proportional to it's computational
intensity. In the case of mintItem() the human-readable version of these opperations are so:

```solidity
tokenIdCounter.increment();
		uint256 tokenId = tokenIdCounter.current();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
		return tokenId;
```

But remember that the opperations are really just bytecode that's derrived from the Solidity code
shown above.

2. How much gas costs per unit

The same opperations will always costs the same amount of gas units. But the price of gas will
fluxuate, so identical transactions vary in cost as time progresses.

### Signature ![signature cart](/images/signature-cart.svg)

The signature cart holds a big piece of paper with Mrs. Private Key's signature. The signature
was not included on the "transaction details" because the signature is not stored on chain.

However there is still a signature cart because its too important of a concept to leave out.
