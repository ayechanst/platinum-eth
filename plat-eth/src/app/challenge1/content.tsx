export interface ChallengePageContent {
  id: number;
  checkpointTitle: string;
  checkpointModules: string[];
}

export interface AccountPageContent {
  id: number;
  modulePageName: string;
  header: string;
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
  header: "Accounts are train stations, lets build one!",
  introStory:
    // "An account is a very cozy little train station that lives on a gigantic block in outer space. As you stand in front of the train station, you see a tranquil little pond with lilly pads, and you can smell the mud and feel the freshness radiating from the little pond. You can taste familiarity when you stand on the little cobblestone path leading up to the train stations front door.",
    "How are accounts train stations? Well, they can send and receive money, have an address, and have a lock on the door, just like a train station. What does an account look like on the blockchain? Let's build a conceptual account with our minds so we remember. Get ready to go into creativity overdrive! The more ridiculous, the better you'll remember. ",
  vocabulary: [
    "Address",
    "Public Key",
    "Private Key",
    "Balance",
    "Nonce",
  ],
  submodules: [
    {
      id: 1,
      submoduleName:
        "You stumble accross an old train station",
      submoduleStory:
        // "As you face the train station, you see a very worn out wooden board hanging right above the front door. A huge wooden board held by 2 wooden pillars towers above the train station with an address written on it so big and bold it can be seen from miles away. The board has bright yellow lights all around it so it can be seen even at night.",
        "And it's tiny. In fact, you realize you are a giant three times the size of the train station! You unbuckle your backpack and pull out a signpost with an address on it. The bottom of the post is razor sharp, and with all your might, you drive it through the station's roof, feeling all the cracks and crushes as it *thumps* into the ground below. The train station now has an address!",
      submoduleExplanation:
        "Addresses are unique identifiers, so people know where to send transactions. They are public, and everyone can see them.",
    },
    {
      id: 2,
      submoduleName: "Where are my keys?",
      submoduleStory:
        // "You walk up to the train station and notice a big hook with a huge rusty key on it. This key is the public key and anyone can see it, it's out in the open.",
        "You reach into your pocket, pull out two keys, and they're alive! Ms. Public  Key is happy to see the sky and mesmerizingly dances salsa in circles on your open palm. She's a key with legs and a bright red dress, and it tickles when she dances. You gently place her at the entrance of the house.",
      submoduleExplanation:
        "Accounts have a public key, which is where the account address is derived from.",
    },
    {
      id: 3,
      submoduleName: "Patiently waiting",
      submoduleStory:
        // "Although the train station is old and cozy, the door is made of polished metal with an enourmous chain wrapping it. On the chain is a gigantic lock swinging back and forth in the wind. Only someone with a private key can open this lock and do things inside the train station. Equipped with your private key, you unlock the door and enter into the train station.",
        "is Mrs. Private Key in your other hand. She has a black dress suit on and is reading a book. She is Ms. Public Key's older sister, and you think to yourself, how can two keys from the same parents be so different? Mrs. Private Key does not speak or want to be outside, so you set her down and rip the roof off the train station, creating a noise that can be heard for miles. You gently place Mrs. Private Key inside the station, where she seems happier.",
      submoduleExplanation:
        "An account cannot be accessed without a private key",
    },
    {
      id: 4,
      submoduleName: "No money more problems!",
      submoduleStory:
        // "On the left side of the room you see a big balance with coins over flowing from it. The coins are so bright that whole corner of the train station is glowing with a yellow hue. A small flying robot is weighing and counting the coins, and has a digital screen on its back displaying the total amount of coins there. Its back is displaying the balance of this train station.",
        "Our train station needs money to operate. We call that money the balance. Naturally, in your bag, you pull out a shining silver balance. It's so shiny that it reflects the sun's light into your giant eyes and temporarily blinds you. You don't want anyone to steal it, so you place it next to Mrs. Public Key. Then, you bring out a pouch full of coins and pour the coins out onto the balance, creating a delightful clinking sound.",
      submoduleExplanation:
        "An account has a balance of tokens.",
    },
    {
      id: 6,
      submoduleName: "On the back wall",
      submoduleStory:
        // "On the back wall, there is a small door leading to the train platform. There's a rugged paper on it with a big red number. The number is nonce and represents the amounts of trains that have left this train station.",
        "you feel like it needs a poster to liven up the place for Mrs. Pulic Key and the balance full of coins. Something organizational, you think, pragmatic! You pull out a notepad and hammer it into the back wall of the train station. Driving the nail straight through the thick stack of paper. Then, you write a big 0 on the first sheet. This is the nonce, and it keeps track of how many transactions have been sent from this account. It's a security measure; how pragmatic!",
      submoduleExplanation:
        "Nonces prevent re-entrancy attacks.",
    },
  ],
  summary:
    "An account is controlled by a private key, and public key. An account has an address, a balance, and a nonce. We will add more detial to this little train station as we progress, but for now remember this building. A cozy building with a huge sign above it. A strong metal door and a lock. Inside is a big stamp with a golden key on one end, and another key on the desk. In the back is a poster with a nonce on it.",
};
