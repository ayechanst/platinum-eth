interface VocabularyProps {
  vocab: string[];
}
const Vocabulary: React.FC<VocabularyProps> = ({
  vocab,
}) => {
  return (
    <>
      <div className="p-5 m-5 bg-yellow-500">
        vocab: {vocab}{" "}
      </div>
    </>
  );
};
export default Vocabulary;
