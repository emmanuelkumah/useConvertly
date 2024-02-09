import { useState, useEffect } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";
import ConvertApi from "convertapi-js";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | string[]>();
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  // useEffect(() => {
  //   convertFile();
  // }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      convertFile(file);
      // setSelectedFile(file);
      //setStatus("success");
    }
  };

  const convertFile = async (file: File) => {
    let convertApi = ConvertApi.auth(import.meta.env.VITE_API_KEY);

    let params = convertApi.createParams();
    params.add("file", file);
    try {
      let result = await convertApi.convert("docx", "pdf", params);
      console.log(result.files[0].Url);
    } catch (error) {
      console.log(error);
    }
  };

  // // Get result file URL
  // let url = result.files[0].Url;

  return (
    <>
      <h2>File Conversion made easy</h2>
      <FileUploader onChange={handleFileChange} />
      <p>{status}</p>
    </>
  );
}

export default App;
