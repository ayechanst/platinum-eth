interface VocabularyProps {
  vocab: string[];
}
const Vocabulary: React.FC<VocabularyProps> = ({
  vocab,
}) => {
  return (
    <>
      <div className="m-5 bg-teal-500">
        <div className="p-2 text-bold text-xl">
          Important Items:
        </div>
        <div className="glass p-5">
          <ol>
            {vocab.map((word, key) => {
              return (
                <li key={key}>
                  {key + 1}: {word}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Vocabulary;
