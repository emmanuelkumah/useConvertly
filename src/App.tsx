import { useState, useEffect } from "react";
import ConvertApi from "convertapi-js";
import "./App.css";

//authorization
let convertApi = ConvertApi.auth(import.meta.env.VITE_API_KEY);
let params = convertApi.createParams();

function App() {
  const [hasfile, sethasFile] = useState<boolean>(false);
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      params.add("File", e.target.files[0]);
      convertFile();
    }
  };

  const convertFile = async () => {
    try {
      let result = await convertApi.convert("docx", "pdf", params);
      console.log(result.files[0].Url);
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <>
      <h2>File Conversion made easy</h2>
      <div>
        <label htmlFor="file">Choose a file </label>
        <input
          type="file"
          id="file"
          accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
        />
      </div>
      <p>{status}</p>
    </>
  );
}

export default App;
