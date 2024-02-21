import { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  styled,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Modal,
  LinearProgress,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { convertAPI } from "../Pages/FileConversion";
import { data } from "../conversionFormat";

type IParams = any;

const ConvertFile = ({ file, params }: { file: File; params: IParams }) => {
  const [fileOutput, setFileOuput] = useState("");
  const [status, setStatus] = useState<
    "initial" | "converting" | "success" | "fail"
  >("initial");
  const [downloaFile, setDownloadFile] = useState<string>("#");
  const [open, setOpen] = useState(false);

  const initialFileFormat: any = file.name.split(".").pop();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFileOuput(event.target.value as string);
  };
  const handleFileConversion = () => {
    setStatus("converting");
    convertFile(params);
  };
  const handleCloseModal = () => setOpen(false);

  const convertFile = async (params: IParams) => {
    try {
      let result = await convertAPI.convert(
        initialFileFormat,
        fileOutput,
        params
      );
      setDownloadFile(result.files[0].Url);
      setStatus("success");
      setOpen(true);
    } catch (error) {
      setStatus("fail");
    }
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",

    [theme.breakpoints.up("md")]: {
      //   height: "50vh",
    },
  }));
  return (
    <>
      <Container>
        <StyledBox>
          <Grid
            container
            spacing={4}
            sx={{
              backgroundColor: "#fff",
              marginTop: "2rem",
              border: "1px solid #333",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} md={3} sx={{ paddingRight: "32px" }}>
              <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
                {file.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{ paddingRight: "32px" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: "1.2rem" }}
              >{`${Math.floor(file.size / 1000)} KB`}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ paddingRight: "32px", paddingBottom: "32px" }}
            >
              <FormControl fullWidth>
                <InputLabel id="select-label">Convert to</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="select-format"
                  value={fileOutput}
                  label="Format"
                  onChange={handleChange}
                >
                  {data.map((file) => (
                    <MenuItem key={file.id} value={file.output}>
                      {file.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                onClick={handleFileConversion}
                sx={{ marginBottom: "1rem" }}
              >
                Convert file
              </Button>
            </Grid>
          </Grid>
          {status === "converting" && (
            <Box sx={{ width: "100%", marginTop: "2rem" }}>
              <LinearProgress />
            </Box>
          )}
          {status === "success" && (
            <Container>
              <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center", paddingBottom: "2rem" }}
                  >
                    File converted successfully
                  </Typography>
                  <Box sx={{ display: "grid", placeItems: "center" }}>
                    <Button href={downloaFile} variant="contained">
                      Download file
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Container>
          )}
          {status === "fail" && (
            <Typography
              variant="h3"
              sx={{ fontSize: "1rem", color: "red", marginTop: "2rem" }}
            >
              Error Converting file. Please try again
            </Typography>
          )}
        </StyledBox>
      </Container>
    </>
  );
};

export default ConvertFile;
