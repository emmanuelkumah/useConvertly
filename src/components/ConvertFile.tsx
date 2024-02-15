import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  styled,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { convertAPI } from "../App";
import { data } from "../conversionFormat";

type IParams = any;

const ConvertFile = ({ file, params }: { file: File; params: IParams }) => {
  const [fileOutput, setFileOuput] = useState("");
  const [status, setStatus] = useState<
    "initial" | "converting" | "success" | "fail"
  >("initial");
  const [downloaFile, setDownloadFile] = useState<string>("#");
  const initialFileFormat: any = file.name.split(".").pop();

  const handleChange = (event: SelectChangeEvent) => {
    setFileOuput(event.target.value as string);
  };
  const handleFileConversion = () => {
    setStatus("converting");
    convertFile(params);
  };

  const convertFile = async (params: IParams) => {
    try {
      let result = await convertAPI.convert(
        initialFileFormat,
        fileOutput,
        params
      );
      setDownloadFile(result.files[0].Url);
      setStatus("success");
    } catch (error) {
      setStatus("fail");
      console.log(error);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {file.name}
        </Grid>
        <Grid item xs={12} md={3}>
          {`${Math.floor(file.size / 1000)} KB`}
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ minWidth: 120 }}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" onClick={handleFileConversion}>
            Convert file
          </Button>
        </Grid>
      </Grid>
      {status === "converting" && "Converting file ..."}
      {status === "success" && (
        <div>
          <p>File converted successfully</p>
          <Button href={downloaFile} variant="contained">
            Download file
          </Button>
        </div>
      )}
      {status === "fail" && "Error converting file"}
    </Box>
  );
};

export default ConvertFile;
