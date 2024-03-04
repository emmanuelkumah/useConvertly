import { useCallback, useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const DragDropFileUpload = ({ onFileUpload }: { onFileUpload: any }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(true);
    },
    []
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);
    },
    []
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        onFileUpload(event.dataTransfer.files[0]);
      }
    },
    [onFileUpload]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        onFileUpload(event.target.files[0]);
      }
    },
    [onFileUpload]
  );

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginTop: "2rem",
          border: dragOver ? "2px dashed #000" : "2px dashed #f50a4a",
          textAlign: "center",
          cursor: "pointer",
          padding: "2rem",
          borderRadius: "10px",
          background: dragOver ? "#eee" : "#fafafa",
          boxShadow: "10px 10px 25px 0 rgba(0,0,0,.16)",
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="raised-button-file">
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton
              color="primary"
              aria-label="upload file"
              component="span"
            >
              <CloudUploadIcon style={{ fontSize: 60 }} />
            </IconButton>
            <Typography
              variant="h3"
              sx={{
                fontSize: "0.8rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              Drag and drop files here or click to select files
            </Typography>
          </Box>
        </label>
      </Paper>
    </>
  );
};

export default DragDropFileUpload;
