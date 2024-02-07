import { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";
import Status from "./components/Status";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");
  const [fileID, setFileID] = useState<String | null>(null);

  const baseURL = "https://conversion-tools.p.rapidapi.com/";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      setStatus("uploading");
      const formData = new FormData();
      formData.append("File", selectedFile);
      const url = `${baseURL}files`;
      const options = {
        method: "POST",
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "conversion-tools.p.rapidapi.com",
        },
        body: formData,
      };
      //try connecting to server
      try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log(data);
        setFileID(data.file_id);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("fail");
      }
    }
  };
  return (
    <>
      <h2>File Conversion made easy</h2>
      <FileUploader onChange={handleFileChange} />
      {selectedFile && <button onClick={handleFileUpload}>Upload file</button>}
      <Status status={status} />
    </>
  );
}

export default App;
