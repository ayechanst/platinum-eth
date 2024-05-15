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

You can view the factory (contract) by navigating from the root of challenge 0 and going to
packages > hardhat > contracts > YourCollectible.sol and you'll see all the Solidity code, or
look at it on Github [here](https://github.com/scaffold-eth/se-2-challenges/blob/challenge-0-simple-nft/packages/hardhat/contracts/YourCollectible.sol).

So that's what the Solidity code looks like, now how does that look as bytecode, and why would it matter?
Factories just like in real life are organized in a standardized manner to ensure consistency.

Bytecode is one long hexadecimal string that has everything in the smart contract. Within that hexadecimal
string, functions have their function signature hashed so they are easy to identify and call when you send
a transaction requesting a certain function be executed.

The mintItem() function has a signature of mintItem(address to, string memory uri) public returns (uint256)
which is hashed into: **110bcd45**. Now take a look at just some of the smart contract's bytecode, see where the
function is?

![challenge 0 bytecode](/images/challenge0-bytecode.jpg)

If this seems too complicated don't try to remember this, just absorb the information and tie it into a story. I
went into some details but if they are beyond you just remember this:

Smart contracts are factories with **addresses**. Within the factory there are several machines that do different
things. These machines each have a unique identifier (such as **110bcd45**).

That's it for smart contracts! When moving onto the transactions section, the same thing applies. If a topic is
too in depth, just forget the details and remember the basic story. Eventually when you apply this knowledge or
revise this challenge, information will fit snuggly into the gaps of your solid foundation! [Back](/posts/2simpleNFT)
to the Challenge 0 page.
