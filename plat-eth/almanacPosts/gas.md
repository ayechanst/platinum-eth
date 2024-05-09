---
title: "Gas"
subtitle: "Why gas. Why not just free. Wen free gas."
data: "2024-04-22"
---

Gas is a fee that needs to be paid for transactions to go through. There are two main
reasons:

1. Pay the validators
2. Prevent people from sending millions of random transations to overload the validators and
   clog the network

> What validators? Who are they?

## Paying the validators

Remember when someone was tyring to steal your funds in the private key section of EOAs? The
validators were the people who verified that the transactions was in accordance with blockchain
rules.

In that example, they inspected the signature to make sure it matched the address it claimed
to have come from. The "signature" is a cryptographic proof, and validators need to decrypt
the signature first, before they can tell if it came from the matching address or not.

Validating thousands of transactions is computationally intensive, which is why validators
are paid a cut for their hard work. Paying the validators is like paying taxes for railroad
workers who keep the train tracks smooth.

## Prevent people from clogging the network

Imagine validators were selfless and worked for free. The intense computation still costs time,
so what would happen if on April 1st a very funny person sent 1 trillion transactions at once?

Anyone else sending transactions would have to wait for the 1 trillion transactions to go through
first. Another reason gas exists is because of scenarios like this, where bad actors could
overload the network with arbitrary transactions.

If this funny person had to pay for 1 trillion transactions, he would be less funny because he'd
be financially ruined. Gas fees prevents bad actors from trying to break the network by
overloading it.

Even if someone isn't trying to overload the network, gas fees still make people think carefully
before making transactions since they're the ones paying for the cost.

<!-- # How are gas costs determined?

How much gas do we need? How much gas will we pay? The total cost of gas depends on two things:

1. What our input data is doing
2. How much gas costs per unit

Our data cart will instruct the factory to execute different actions. Some actions cost
more units of gas than others. And depending on the transaction, there could be different
amounts of actions to executed. We will cover what these actions are in the smart contract
section.

The same actions will always costs the same amount of gas units. But the price of gas will
fluxuate along with the market, so transactions doing the same thing could cost different
amounts at different times of day. -->

## Summary

Gas fees exist to promote good actions, such as sending as few transations as possible so the network
runs smoothly, and not overloading the network on purpose. We will revisit gas and validators soon, now
onto [checkpoint 2: minting](/posts/2simpleNFT)!

---
