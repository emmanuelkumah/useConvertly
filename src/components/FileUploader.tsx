import React, { useState } from "react";
import Status from "./Status";

type TFileProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileUploader: React.FC<TFileProps> = ({ onChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");
  const [fileID, setFileID] = useState<String | null>(null);

  const handleFileUpload = async () => {
    if (file) {
      setStatus("uploading");
      const formData = new FormData();
      formData.append("File", file);

      const url = "https://conversion-tools.p.rapidapi.com/files";

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
    <div>
      <label htmlFor="file">Choose a file </label>
      <input type="file" name="" id="file" onChange={onChange} />
      <ul>
        {file && (
          <section>
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
        )}
      </ul>
      {file && <button onClick={handleFileUpload}>Upload file</button>}
      <Status status={status} />
    </div>
  );
};

export default FileUploader;
