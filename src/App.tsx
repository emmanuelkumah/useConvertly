import { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");
  const [fileID, setFileID] = useState<String | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleFileUpload = ()=>{
    
  }
  return (
    <>
      <h2>File Conversion made easy</h2>
      <FileUploader onChange={handleFileChange} />
      {selectedFile && <button>Upload file</button>}
    </>
  );
}

export default App;
