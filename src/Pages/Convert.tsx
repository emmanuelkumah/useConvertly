import React from "react";
import DragDropFileUpload from "../components/DragDropFileUpload";

const Convert = () => {
  const handleFileUpload = (file: unknown) => {
    console.log(file);
  };
  return (
    <div>
      <DragDropFileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default Convert;
