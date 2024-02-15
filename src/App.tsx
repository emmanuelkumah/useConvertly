import { useState } from "react";

import { Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ConvertFile from "./components/ConvertFile";
import ConvertApi from "convertapi-js";

//authorization

export const convertAPI = ConvertApi.auth(import.meta.env.VITE_API_KEY);
let params = convertAPI.createParams();

function App() {
  const [file, setFile] = useState<File | null>(null);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      params.add("File", e.target.files[0]);
    }
  };

  return (
    <>
      <section>
        <h2>File conversion made easy</h2>
        <p>Convert your files to any format</p>
      </section>

      <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>
      </div>

      {file && <ConvertFile file={file} params={params} />}
    </>
  );
}

export default App;
