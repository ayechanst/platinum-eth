export interface ChallengePageContent {
  id: number;
  checkpointTitle: string;
  checkpointModules: string[];
}

const challengePageContent: ChallengePageContent[] = [
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
export default challengePageContent;
