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

<details>
  <summary>Visual Example</summary>

Challenge 0 doesn't require you to understand any code, this is just to expose you to the inner workings
of factories. Here is the executable code that will mint you your NFT.

Think of each `function()` in the code below as **individual machines** within the factory. When we explore
transactions, we'll uncover how specific machines are turned on when the train arrive to the factory.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2; //Do not change the solidity version as it negatively impacts submission grading

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract YourCollectible is
	ERC721,
	ERC721Enumerable,
	ERC721URIStorage,
	Ownable
{
	using Counters for Counters.Counter;

	Counters.Counter public tokenIdCounter;

	constructor() ERC721("YourCollectible", "YCB") {}

	function _baseURI() internal pure override returns (string memory) {
		return "https://ipfs.io/ipfs/";
	}

	function mintItem(address to, string memory uri) public returns (uint256) {
		tokenIdCounter.increment();
		uint256 tokenId = tokenIdCounter.current();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
		return tokenId;
	}

	// The following functions are overrides required by Solidity.

	function _beforeTokenTransfer(
		address from,
		address to,
		uint256 tokenId,
		uint256 quantity
	) internal override(ERC721, ERC721Enumerable) {
		super._beforeTokenTransfer(from, to, tokenId, quantity);
	}

	function _burn(
		uint256 tokenId
	) internal override(ERC721, ERC721URIStorage) {
		super._burn(tokenId);
	}

	function tokenURI(
		uint256 tokenId
	) public view override(ERC721, ERC721URIStorage) returns (string memory) {
		return super.tokenURI(tokenId);
	}

	function supportsInterface(
		bytes4 interfaceId
	)
		public
		view
		override(ERC721, ERC721Enumerable, ERC721URIStorage)
		returns (bool)
	{
		return super.supportsInterface(interfaceId);
	}
}

```

All of these functions and the code as a whole is compiled into hexadecimal bytecode.
Below is just the start of the compiled Solidity code above:

60806040523480156200001157600080fd5b506040518060400160405280600f

</details>

Why is this important to know now? We are laying the foundation for future concepts to
stick better. Smart contracts are **factories** and each function is machine that does
a specific thing.

Take a look at all the functions, can you guess which function we will be calling when we
mint our NFT?
