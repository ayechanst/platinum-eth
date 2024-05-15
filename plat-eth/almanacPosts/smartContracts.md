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

Why is this important to know now? We are laying the foundation for future concepts to
stick better. Having a basic understanding of low level concepts will help trouble shoot problems in the
future and save you time as well. It will help you understand what's going on "under the hood" when things
wont compile in Solidity.

Smart contracts are **factories** and each function is machine that does
a specific thing.

Look at this machine in the Simple NFT Example smart contract:

```
function mintItem(address to, string memory uri) public returns (uint256) {
		tokenIdCounter.increment();
		uint256 tokenId = tokenIdCounter.current();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
		return tokenId;
	}
```

Can you guess what the role of this machine is?
