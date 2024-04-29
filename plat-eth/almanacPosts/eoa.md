---
title: "Externally Owned Accounts"
subtitle: "What are accounts? What are they for?"
data: "2024-04-22"
---

![train-station](http://localhost:3000/images/train-station.svg)

Let's begin our trip through Platinum-Ethereum!

These externally owned accounts (EOAs) are controlled by real people, and are the only account
that can **initiate** transactions. What else initiates train-sactions? Train stations!
Think of EOAs as train stations. We will re-visit accounts as we progress through the challenges.

# 🎟 Simple NFT Example

Accounts are made up of a pair of keys, a **private key** and a **public key**.
The private key is generated from the hash of your randomly generated seed phrase.
The public key is generated from the private key, and the **address** of the account
is derived from the public key.

### Balance

The point of EOAs are to store value safely behind the protection of a private key. EOAs can store
Ethereum tokens, and all other tokens. They can also store NFTs, which you'll be sending yourself
later.

Imagine the train station has piles of shiny tokens in its corners. The inside of the station is
also decorated with vintage artwork, representing NFTs. The station is opperated by the following
characters:

### ![Mrs. Private Key](http://localhost:3000/images/mrsPrivateKey.svg) Mrs. Private Key

Think of the private key as the train station clerk. She is very reserved and private, and her job
is to sign paperwork for outgoing transactions, as proof that this train station is where to transaction
originated from.
Without the private key, you cannot access anything in your account. Wallets help manage private keys,
but we'll get into that in the wallet section.

### ![Ms. Public Key](http://localhost:3000/images/msPublicKey.svg) Ms. Public Key

The public key is like the daughter of the private key, because its generated from the private key.
This person is outgoing, but not particularly useful. From Ms. Public Key, the address of the account
is generated.

### Address

The address is generated from the public key, Mrs. Private key allowed her daughter to choose the
address. The address is what allows Mrs. Private Key's signature to be decrypted, proving the transaction
came from this address. Think of the address as a massive billboard above the train station that can be
seen from miles.

That's all you need to know about EOAs for Challenge 0! Time to head [back](/posts/2simpleNFT) and read about transactions,
and why the analogy for EOAs are train stations.
