import { Typography, Grid, Box, Paper } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VerifiedIcon from "@mui/icons-material/Verified";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const HowItWorks = () => {
  return (
    <Box id="how" sx={{ marginBottom: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "1.3rem",
          fontWeight: "100",
          marginTop: "2.5rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        How It Works
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontSize: "1.1rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Only three steps to your desired output
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{ display: "grid", placeItems: "center", borderRadius: "15px" }}
          >
            <PostAddIcon
              sx={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#f50a4a",
                marginTop: "1rem",
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontSize: "1.3rem", fontWeight: "100" }}
            >
              Step 1
            </Typography>
            <Typography variant="body1" sx={{ padding: "1rem" }}>
              Drag and drop file from computer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{ display: "grid", placeItems: "center", borderRadius: "15px" }}
          >
            <VerifiedIcon
              sx={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#f50a4a",
                marginTop: "1rem",
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontSize: "1.3rem", fontWeight: "100" }}
            >
              Step 2
            </Typography>
            <Typography variant="body1" sx={{ padding: "1rem" }}>
              Choose an output format.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{ display: "grid", placeItems: "center", borderRadius: "15px" }}
          >
            <FileDownloadIcon
              sx={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#f50a4a",
                marginTop: "1rem",
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontSize: "1.3rem", fontWeight: "100" }}
            >
              Step 3
            </Typography>
            <Typography variant="body1" sx={{ padding: "1rem" }}>
              Download your converted file
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
