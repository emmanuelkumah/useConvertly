import { useState } from "react";

import { Container, Button, Box, Typography, styled } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConvertFile from "../components/ConvertFile";
import ConvertApi from "convertapi-js";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export const convertAPI = ConvertApi.auth(import.meta.env.VITE_API_KEY);
let params = convertAPI.createParams();

const FileConversion = () => {
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

  const StyledBox = styled("div")(({ theme }) => ({
    display: "grid",
    placeItems: "center",
    width: "90vw",
    height: "50vh",
    border: "5px dashed #fc372f",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",

    [theme.breakpoints.up("md")]: {
      width: "50vw",
      height: "50vh",
    },
  }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      params.add("File", e.target.files[0]);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: "1.5rem", fontWeight: "700" }}
          >
            File conversion made easy
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "1.2rem", marginBottom: "2rem" }}
          >
            No E-Mail address. No waiting
          </Typography>

          <StyledBox>
            <Button
              component="label"
              size="large"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<PostAddIcon />}
              sx={{ backgroundColor: "#fc372f" }}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </StyledBox>

          {file && <ConvertFile file={file} params={params} />}
          <HowItWorks />
        </Box>
      </Container>
    </>
  );
};

export default FileConversion;
