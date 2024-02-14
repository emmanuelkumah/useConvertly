import { useState, useEffect } from "react";
import ConvertApi from "convertapi-js";
import "./App.css";

//authorization
let convertApi = ConvertApi.auth(import.meta.env.VITE_API_KEY);
let params = convertApi.createParams();

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string>("");
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // console.log(e.target.files[0]);
      getFileType(e.target.files[0]);
      setFile(e.target.files[0]);
      // params.add("File", e.target.files[0]);
      // convertFile();
    }
  };

  const getFileType = (fileDetails: any) => {
    setFileType(fileDetails.name.split(".").pop());
  };

  /*
  const convertFile = async () => {
    try {
      let result = await convertApi.convert("docx", "pdf", params);
      console.log(result.files[0].Url);
    } catch (error) {
      console.log(error);
    }
  };
  */

  return (
    <>
      <h2>File Conversion made easy</h2>
      <p>Convert your files to any format</p>
      <div>
        <label htmlFor="file">Choose a file </label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
          <div>
            <h3>Convert your {fileType}</h3>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
