---
title: "Transactions"
subtitle: "Who makes transactions? What are their purpose?"
data: "2024-04-22"
---

Transactions are like trains (train-saction). They move balances around, but what else can
they do?

# 🎟 Simple NFT Example

![trainsaction](/images/train.svg)

This train above represents the essential cargo of your transaction: gas, data, and a signature.

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

The signature cart holds a big piece of paper with Mrs. Private Key's signature. The signature
was not included on the "transaction details" because the signature is not stored on chain.
However signatures are a crucial concept and outgoing transactions from EOAs always have
signatures.

# Exploring the Blockchain: Transactions

As soon as we click "Mint Item", our EOA sends a transaction to the **address** of the NFT minting
smart contract. What does our transaction look like in this case? How do we know what it looks like?

Mint yourself **one** NFT in the "My NFTs" tab, then we'll have something to look at.
When your done, click on the "Transfers" tab, it should look like the picture below.

![transfers tab](/images/transactions-tab.jpg)

Then click on your address to look at all the transactions you've made so far. It should look like
this:

![transfers history](/images/transaction-history.jpg)

As you can see, the first transaction made has a **value** of 1 ETH. We made this transaction so our
account has enough value to cover the price of gas.

The second transaction that was made was when we clicked the "Mint Item" button. Click on the transaction
hash to see exactly what that transaction looked like. Then we can talk about how that "train" looks.

<!-- <details>
  <summary>Where is the transaction "from" the contract "to" my address?</summary>

---

This is a great question. NFTs are never "sent" to anyone, instead NFTs change owners. When we look at the
code for the NFT smart contract, you will see that calling the "mintItem()" function makes you the owner
of the NFT.

---

</details> -->

![transaction details](/images/transaction-details.jpg)

### 1. Transaction Hash

All the data included in the transaction is hashed. This way the transaction has completely unique
identifier.

> The same applies to trains. Even if trains are mass produce, they each have small defects that make them unique.

### 2. "From" Address

Here is where our train left from. Your address will be different from mine, but this is your train station's
address, because you are the one that sent this train **to** the...

> Think of the driver's cab on a train. There are important navigational controls, and an itenerary.

### 3. "To" Address

You sent this train **to** the address of the smart contract responsible for minting NFTs. Of course the "to"
address is important, so trains know where to go.

> Also part of the trains itenerary, is the "to" address. Where's the train headed?

### 4. Value

Transactions **can** carry value, for example when you send your friend some ETH. In this case however, the
NFT minting smart contract doesn't require value to mint NFTs, so the **value** field is 0.

> Imagine a train hauling a cart full of gold. That's the value!

### 5. Function Call

We'll get more into this in the smart contract section, but the "function call" area here just specifies which
function on the smart contract this transaction called. It's mintItem() in this case.

> The function call is an explicity written field, but in terms of our imaginary train, the function call is part of the input data!

### 6. Gas Price ![gas cart](/images/gas-cart.svg)

Although the minting was free, we still had to pay gas (also known as a transaction fee). You'll notice the units
of gas is **Gwei**.

> Trains haul their fuel along with them. For gas imagine a red cart full to the top with coal, acting as the train's gas.

### 7. Data ![data cart](/images/data-cart.svg)

Here is our **data**, more specifically our **input data**. The contract will consume this data, call the function
specified in **#5 Function Call**, and feed data into the **mintItem()** function.

We can even see what the **input data** looks like, a long hexadecimal string. We will #8 and #9 later in the
smart contract section.

> Imagine the train pulls a cart full of glowing metal boxes.

---

<!-- ### Nonce ![nonce locomotive](/images/nonce.svg)

The nonce is a number (like the one printed on the train) that indicates the number of
trains a train station has sent off. It's another security measure that solves similar
problems to the private key.

Printed on the side of the train is a nonce. A nonce is a number that indicates the current number
of trains a train station has sent. The nonce is important for train stations sending value to
each other, because if I sent several trains to my friend, I want to be sure that the
trains arrive in the correct order to avoid complications.

Image once again someone is trying to rob your train station of funds. This time they're
more clever about it -->
