import { useState } from "react";
import { Typography, Box } from "@mui/material";
import DragDropFileUpload from "../components/DragDropFileUpload";
import HowItWorks from "../components/HowItWorks";
import ConvertApi from "convertapi-js";
import ConvertFile from "../components/ConvertFile";

//Authorized access to the convertAPI

export const convertAPI = ConvertApi.auth(import.meta.env.VITE_API_KEY);
let params = convertAPI.createParams();

const Convert = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setFile(file);
    params.add("File", file);
  };

  return (
    <div>
      <Box sx={{ display: "grid", placeItems: "center", marginTop: "4rem" }}>
        <Typography variant="h3" sx={{ fontSize: "1.4rem", fontWeight: "700" }}>
          File Conversion
        </Typography>
        <Typography variant="body1">
          Convert your files into any Format
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "0.7rem" }}>
          No Emails, No Sign Ups Required
        </Typography>
      </Box>
      <DragDropFileUpload onFileUpload={handleFileUpload} />
      {file && <ConvertFile file={file} setFile={setFile} params={params} />}

      <HowItWorks />
    </div>
  );
};

export default Convert;
