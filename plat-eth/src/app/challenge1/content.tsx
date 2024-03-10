export interface ChallengePageContent {
  id: number;
  checkpointTitle: string;
  checkpointModules: string[];
}

export interface AccountPageContent {
  id: number;
  modulePageName: string;
  introStory: string;
  vocabulary: string[];
  submodules: any[];
  summary: string;
}

export const challengePageContent: ChallengePageContent[] =
  [
    {
      id: 1,
      checkpointTitle: "Checkpoint 1: ⛽️ Gas & Wallets 👛",
      checkpointModules: [
        "Accounts",
        "Wallets",
        "Transactions",
      ],
    },
    {
      id: 2,
      checkpointTitle: "Checkpoint 2: 🖨 Minting",
      checkpointModules: ["Smart Contrats", "NFTs"],
    },
    {
      id: 3,
      checkpointTitle:
        "Checkpoint 3: 💾 Deploy your contract! 🛰",
      checkpointModules: ["Network", "Deploying"],
    },
  ];

export const accountPageContent: AccountPageContent = {
  id: 1,
  modulePageName: "Accounts",
  introStory: "You arrive at an abandoned train station.",
  vocabulary: [
    "Private Key",
    "Public Key",
    "Address",
    "Nonce",
    "Balance",
  ],
  submodules: [
    {
      submoduleName: "Address 🏡",
      submoduleStory:
        "As you face the train station, you see a very worn out wooden board hanging right above the front door. A huge wooden board held by 2 wooden pillars towers above the train station with an address written on it so big and bold it can be seen from miles away. The board has bright yellow lights all around it so it can be seen even at night.",
      submoduleExplanation:
        "An account has an address, so that people can send things to the account.",
    },
    {
      submoduleName: "The Public Key",
      submoduleStory:
        "You walk up to the train station and notice a big hook with a huge rusty key on it. This key is the public key and anyone can see it, it's out in the open.",
      submoduleExplanation:
        "Accounts have a public key, which is where the account address is derived from.",
    },
    {
      submoduleName: "The private key 🚪",
      submoduleStory:
        "Although the train station is old and cozy, the door is made of polished metal with an enourmous chain wrapping it. On the chain is a gigantic lock swinging back and forth in the wind. Only someone with a private key can open this lock and do things inside the train station. Equipped with your private key, you unlock the door and enter into the train station.",
      submoduleExplanation:
        "An account cannot be accessed without a private key",
    },
    {
      submoduleName: "The private key 🗝️ part 2",
      submoduleStory:
        "You walk into the train station and to the left is a very small desk. On that desk you see envelopes and melted wax. You take a closer look at the private key and notice the end of the handle is a big wax stamp. The private key is both a key to open the door to the train station, but also to stamp paper letters with a signature.",
      submoduleExplanation:
        "An account can send signed transactions with its private key. We will talk about transactions and signatures later.",
    },
    {
      submoduleName: "Balance ⚖️",
      submoduleStory:
        "On the left side of the room you see a big balance with coins over flowing from it. The coins are so bright that whole corner of the train station is glowing with a yellow hue. A small flying robot is weighing and counting the coins, and has a digital screen on its back displaying the total amount of coins there. Its back is displaying the balance of this train station.",
      submoduleExplanation:
        "An account has a balance of tokens.",
    },
    {
      submoduleName: "Nonce 3️⃣",
      submoduleStory:
        "On the back wall, there is a small door leading to the train platform. There's a rugged paper on it with a big red number. The number is nonce and represents the amounts of trains that have left this train station.",
      submoduleExplanation:
        "An account has a nonce, which is a number to track how many transactions this account has sent. Its purpose is the prevent reentrancy attacks and its a security measure.",
    },
  ],
  summary:
    "An account is controlled by a private key, and public key. An account has an address, a balance, and a nonce. We will add more detial to this little train station as we progress, but for now remember this building. A cozy building with a huge sign above it. A strong metal door and a lock. Inside is a big stamp with a golden key on one end, and another key on the desk. In the back is a poster with a nonce on it.",
};
