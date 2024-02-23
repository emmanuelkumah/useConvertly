import { useState } from "react";

import {
  Container,
  Button,
  Box,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import backgroundImage from "../assets/background.png";
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
  const imageURL =
    "https://cdn.pixabay.com/photo/2023/05/20/20/39/european-roller-8007340__340.jpg";

  return (
    <>
      <Container maxWidth="lg">
        <Paper
          sx={{ display: "grid", placeItems: "center", marginTop: "4rem" }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: "1.5rem", fontWeight: "700", mt: "3rem" }}
          >
            File conversion made easy
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
            Convert your files to any format.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "0.9rem " }}>
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
        </Paper>
        <HowItWorks />
      </Container>
    </>
  );
};

export default FileConversion;
