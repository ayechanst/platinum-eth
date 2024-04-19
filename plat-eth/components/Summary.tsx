interface SummaryProps {
  summary: string;
}
const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <>
      <div className="p-5 m-5 bg-teal-800 rounded-xl">
        <p className="text-bold text-3xl pb-2">Summary</p>
        <p>{summary}</p>
      </div>
    </>
  );
};
export default Summary;
