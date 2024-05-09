---
title: "Externally Owned Accounts (Train Stations)"
subtitle: "What are accounts? What are they for?"
data: "2024-04-22"
---

![train-station](/images/train-station.svg)

Externally owned accounts (EOAs) hold value for users, and share a lot of similarities
with train stations.

<details>
  <summary>Jargon Alert: Account</summary>

---

> Damn, I gave my private key to my brand new friend and now all my HarryPotterObamaSonic10Inu tokens in my **account** are gone!

**Q:** What **account** is this person referring to?

**A:** They are referring to their externally owned account (EOA).

Technically, there are two kinds of accounts: EOAs and smart contracts. However people use the term
**accounts** to refer to EOAs because its shorter, less technical, and more understood.

---

</details>

## Decoupling the concept of EOAs and wallets

If your new to crypto, you'll hear the words wallet and account used interchangabley. Differenciating
them now will save you massive headaches down the road.

EOAs in one sentence:

> An EOA is a **balance** of tokens managed by a **private key**.

Now for wallets:

> A wallet is software that holds **private keys** in order to manage EOAs.

Hold onto those definitions shortly while we explain EOAs, and in the wallets section everything will
be packaged into a story Platinum-Eth style.

# Challenge 0: 🎟 Simple NFT Example

So what do we need to know about EOAs within the context of challenge 0? We are grabbing funds from
a faucet, so we'll cover account **balances**, and we are interacting with our EOA through our wallet,
so we'll cover **private keys**.

### ![balance](/images/balance.svg) Balance

The train station can hold any amount of tokens.

The balance of an account is simply a number representing the amount of value within the account.

> Think of the balance as a pile of coins inside your train station.

### Address

Train stations have a unique address so people know where to send their trains. Addresses are
public information, and anyone can look at the balances of your station.

> Think of the address as a huge billboard above the station that can be seen for miles.

### ![Mrs. Private Key](/images/mrsPrivateKey.svg) Mrs. Private Key

Mrs. Private key is a reserved and secretive clerk who provides outgoing trains with a signature
(a cryptographic proof) that the train originated from the **address** of train station she works at.

Here's a story where Mrs. Private Key reveals her purpose without saying a word.

**Chapter 1: The Theif**
Someone is trying to steal from you. Your station's address is public, so the theif walks into your
train station, shovels your funds into a train, and set the train's destination to their
station's **address**. Mrs. Private key is off work, so the theif uses their private key to create a
signature, and sends the train on its way.

**Chapter 2: Caught Red Handed**
The train eventually crosses a checkpoint. The workers at the checkpoint inspect the signature by comparing it
to the address the train came from. They realize the signature is not Mrs. Private Key's, because her signature
would have a relation to your station's address. It looks like someone else signed the paperwork. The checkpoint
workers determine the train is suspicious, and send the train back to your train station. The theif fails!

**Chapter 3: The Moral of the Story**
Remember that the ethereum ecosystem is a network of accounts sending transactions to each other.
So if you want to do anything with your account, you'll need to send a transaction. However every
transaction has a private key signature that proves it came from a particular account. When the
signature is wrong, the transaction is reverted.

> What does this mean simply?

Transactions go nowhere without the correct private key signature. Your **address** is public, your **balance**
is public, but no one can do anything with your **balance** without your private key! They just can't move funds
around.

What if the theif had your private key? Well then the train would have passed the checkpoints and your funds would
have been stolen!

That's all you need to know about EOAs for Challenge 0! Time to head [back](/posts/2simpleNFT) and read about
**wallets**, the home of Mrs. Private Key.
