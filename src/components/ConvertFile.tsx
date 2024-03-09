import { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Modal,
  LinearProgress,
  Stack,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DescriptionIcon from "@mui/icons-material/Description";
import TopicIcon from "@mui/icons-material/Topic";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

import { convertAPI } from "../Pages/Convert";
import { data } from "../fileOutputFormats";

type IParams = any;

const ConvertFile = ({
  file,
  params,
}: {
  file: File;
  params: IParams;
  setFile: any;
}) => {
  const [fileOutput, setFileOuput] = useState("");
  const [status, setStatus] = useState<
    "initial" | "converting" | "success" | "fail"
  >("initial");
  const [downloaFile, setDownloadFile] = useState<string>("#");
  const [open, setOpen] = useState(false);

  const initialFileFormat: any = file.name.split(".").pop();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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

  return (
    <>
      <Container maxWidth="lg">
        <Paper>
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "#fff",
              marginTop: "2rem",
              border: "1px solid #333",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} sm={3} sx={{ paddingRight: "12px" }}>
              <Stack direction="row" spacing={1}>
                <DescriptionIcon />
                <Typography variant="h3" sx={{ fontSize: "0.8rem" }}>
                  {file.name}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ paddingRight: "12px" }}>
              <Stack direction="row" spacing={1}>
                <TopicIcon />
                <Typography variant="h3" sx={{ fontSize: "0.8rem" }}>
                  File Size:
                  {`${Math.floor(file.size / 1000)} KB`}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
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
                  MenuProps={MenuProps}
                >
                  {data.map((file) => (
                    <MenuItem key={file.id} value={file.output}>
                      {file.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                size="medium"
                onClick={handleFileConversion}
                endIcon={<CloudSyncIcon />}
                sx={{ marginBottom: "1rem", textTransform: "capitalize" }}
              >
                Convert file
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {status === "converting" && (
          <Box sx={{ width: "100%", marginTop: "2rem" }}>
            <LinearProgress />
          </Box>
        )}
        {status === "success" && (
          <Container maxWidth="lg">
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
                  Hurray! File converted successfully
                </Typography>
                <Box sx={{ display: "grid", placeItems: "center" }}>
                  <Button
                    href={downloaFile}
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                    startIcon={<CloudSyncIcon />}
                  >
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
      </Container>
    </>
  );
};

export default ConvertFile;
