import React from "react";
import ModuleButton from "./ModuleButton";

interface CheckpointProps {
  name: string;
  moduleNames: string[];
}

const Checkpoint: React.FC<CheckpointProps> = ({
  name,
  moduleNames,
}) => {
  return (
    <div className="flex w-full p-5 ">
      <div className="flex-col w-full md:w-1/3">
        <div className="bg-gray-800 p-5 h-full flex-wrap text-2xl rounded-2xl">
          {name}
        </div>
      </div>
      <div className="flex flex-wrap">
        {moduleNames.map((module) => {
          return <ModuleButton name={module} />;
        })}
      </div>
    </div>
  );
};
export default Checkpoint;
