import { Typography, Grid } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VerifiedIcon from "@mui/icons-material/Verified";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const HowItWorks = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontSize: "2rem",
          fontWeight: "100",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        How It Works
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontSize: "1.4rem", marginBottom: "1rem" }}
      >
        Only three steps to your desired format:
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <PostAddIcon
            sx={{
              fontSize: "3rem",
              backgroundColor: "#3C493F",
              padding: "1rem",
              color: "white",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              marginBottom: "20px",
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontSize: "1.3rem", fontWeight: "700" }}
          >
            Step 1
          </Typography>
          <Typography variant="body1">
            Select a file from your computer
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <VerifiedIcon
            sx={{
              fontSize: "3rem",
              backgroundColor: "#3C493F",
              padding: "1rem",
              color: "white",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              marginBottom: "20px",
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontSize: "1.3rem", fontWeight: "700" }}
          >
            Step 2
          </Typography>
          <Typography variant="body1">Choose an output format.</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <FileDownloadIcon
            sx={{
              fontSize: "3rem",
              backgroundColor: "#3C493F",
              padding: "1rem",
              color: "white",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              marginBottom: "20px",
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontSize: "1.3rem", fontWeight: "700" }}
          >
            Step 3
          </Typography>
          <Typography variant="body1">Download your converted file</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
