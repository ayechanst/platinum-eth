interface SummaryProps {
  summary: string;
}
const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <>
      <div className="p-5 m-5 bg-blue-700">
        summary:
        <p>{summary}</p>
      </div>
    </>
  );
};
export default Summary;
