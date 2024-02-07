import { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";

function App() {
  const [fileID, setFileID] = useState<string | null>(null);

  const getFileID = (): void => {
    console.log("File id will show here");
  };
  return (
    <>
      <h2>File Conversion made easy</h2>
      <FileUploader  />
    </>
  );
}

export default App;
