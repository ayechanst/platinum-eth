---
title: "Externally Owned Accounts (Train Stations)"
subtitle: "What are accounts? What are they for?"
data: "2024-04-22"
---

![train-station](/images/train-station.svg)

Let's begin our trip through Platinum-Ethereum!

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

Let's start by defining an EOA in one sentence:

> An EOA is a **balance** of tokens managed by a **private key**.

Now for wallets:

> A wallet is software that holds **private keys** in order to manage EOAs.

Hold onto those definitions shortly while we explain EOAs, and in wallets section everything will
be packaged into a story Platinum-Eth style.

# Challenge 0: 🎟 Simple NFT Example

So what do we need to know about EOAs within the context of challenge 0? We are grabbing funds from
a faucet, so we'll cover account **balances**, and we are interacting with our EOA through our wallet,
so we'll cover **private keys**.

### ![balance](/images/balance.svg) Balance

The train staion can hold any amount of token in any quantity (NFTs included).

Imagine you're in your train station right now. When you get funds from the faucet, imagine the
tokens appearing our of thin air and raining down inside your station. When you mint your NFTs,
imagine the pictures appearing as artwork on the walls.

The balance of an account is simply a number representing the amount of value within the account.

### Address

Train stations need a unique address so people know where to send their trains. Addresses are
public information, and anyone can look at the balances of your station.

Think of the address as a huge billboard above the station that can be seen for miles.

### ![Mrs. Private Key](/images/mrsPrivateKey.svg) Mrs. Private Key

Mrs. Private key is a reserved and secretive clerk who provides outgoing trains with a signature
(a cryptographic proof) that the train originated from the **address** of train station she works at.

Why do we need private keys?

Let's say someone is trying to steal from you. Your station's address is public, so they walk into your
train station, shovel your funds into a fruadulent train, and set the train's destination to their
station's **address**. Your Mrs. Private key isn't there, so they use their Mrs. Private Key to sign
paperwork, and send the train on its way.

The train eventually crosses a checkpoint. The workers at the checkpoint inspect the signature, and realize the
train is not coming from where the address the signature claims its coming from. The workers send the train back
to your train station and the theif fails.

Remember that the ethereum ecosystem is just a network of accounts sending transactions to each other.
So if you want to do anything with your account, you'll need to send a transaction. However every
transaction has a private key signature that proves it came from a particular account. So when the
signature is wrong, the transaction is reverted.

Thus a safely guarded private key prevents anyone from doing anything with your account.

That's all you need to know about EOAs for Challenge 0! Time to head [back](/posts/2simpleNFT) and read about transactions,
and why the analogy for EOAs are train stations.

---

<!-- ### ![Ms. Public Key](http://localhost:3000/images/msPublicKey.svg) Ms. Public Key

The public key is like the daughter of the private key, because its generated from the private key.
This person is outgoing, but not particularly useful. From Ms. Public Key, the address of the account
is generated.

### Address

The address is generated from the public key, Mrs. Private key allowed her daughter to choose the
address. The address is what allows Mrs. Private Key's signature to be decrypted, proving the transaction
came from this address. Think of the address as a massive billboard above the train station that can be
seen from miles. -->

# 🥩 Decentralized Staking App

Coming soon

---
