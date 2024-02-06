import React, { useState } from "react";
import Status from "./Status";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleFileUpload = async () => {
    if (file) {
      setStatus("uploading");
      const formData = new FormData();
      formData.append("File", file);
      //try connecting to server
      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });
        const data = await result.json();
        console.log(data);
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
      <input type="file" name="" id="file" onChange={handleFileChange} />
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
