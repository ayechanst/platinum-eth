---
title: "Wallets"
subtitle: "Are wallets the same as accounts? No!"
data: "2024-04-24"
---

We can manage our own keys. But crypto wallets exist to make management easier. Wallets are also
essential for improving the user experience, and make crypto accessible to everyone without
drowning them in details.

Think of wallets as... robot butlers.

![Robot Butler](http://localhost:3000/images/butler.svg)

Why robot butlers? Well wallets do a lot of work around your train stations, the same way a butler
would in a large mansion.

# Improving User Experience

When you make a new software wallet, the wallet will give you a seed phrase. From this seed phrase
a private key is derived (as we explored in the EOA section), which derives a public key, which
derives an address.

A wallet can manage multiple EOAs. Multiple private keys can be made from a single seed phrase.
The butler is so good at his job he can essentially teleport to which ever station he needs to be at.

# Where are wallets?

**Not** on the blockchain!
Wallets, unlike EOAs and transactions, are **not** part of the blockchain. Instead they interact with
your EOAs on the blockchain using your private keys you gave the wallet access to.

The robot butler's
chest is a safe with all your private keys inside. The combination to open it is your seed phrase.
If the butler has your keys, and the butler is not on chain, than neither are your keys!

Private keys will **never** be on the blockchain, or else everyone could see them and start forging
transactions like crazy!

# Robot Butler is a secret kidnapper??

Yeah sort of. In the EOA section, you were introduced to Mrs. Private Key.
