import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FileUploader from "./components/FileUploader";

function App() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  // useEffect(() => {
  //   console.log("Will upload to server");
  // }, []);

  const data = new FormData();
  data.append("file", "");

  const options = {
    method: "POST",
    url: "https://conversion-tools.p.rapidapi.com/files",
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "conversion-tools.p.rapidapi.com",
    },
    data: data,
  };

  const uploadFile = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>File Conversion made easy</h2>
      <FileUploader />
    </>
  );
}

export default App;
