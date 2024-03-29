import { Box, Grid, Typography, styled, Button, Paper } from "@mui/material";
import Hero from "../components/Hero";
import howItWorksImage from "../assets/howItWorksImg.png";
import { data } from "../homePageData.ts";

const Home = () => {
  const StyledTypography = styled(Typography)(() => ({
    textAlign: "center",
    paddingTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#15616d",
    borderRadius: "20px",
  }));

  return (
    <>
      <Hero />
      <Box sx={{ marginTop: "4rem" }} id="home">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "800",
                color: "#15616d",
                paddingLeft: "10px",
                borderLeft: "5px dashed red",
                marginBottom: "1.5rem",
              }}
            >
              Productive & Reliable
            </Typography>
            <Typography variant="h2">How it Works?</Typography>
            <Typography variant="body1" sx={{ paddingTop: "1rem" }}>
              To get started, drag and drop the file or upload the file from
              your computer. On completion, specify the output format for the
              file send the request and let's handle the conversion magic
            </Typography>

            <Button
              variant="contained"
              disableElevation
              href="/convert"
              sx={{
                marginTop: "2rem",
                borderRadius: "10px",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Convert Files for free
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={howItWorksImage} width="100%" alt="How fileBox works" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "3rem" }} id="Why">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", textTransform: "capitalize" }}
        >
          Why use fileBox
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            textTransform: "capitalize",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          This is why lots of users come to us for their file needs
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: "4rem" }}>
          {data.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <Paper
                elevation={0}
                sx={{
                  border: "5px solid #15616d",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    cursor: "pointer",
                    transition: "background-color 0.5s",
                    color: "#333",
                  },
                }}
              >
                <Box sx={{ textAlign: "center", fontSize: "2.5rem" }}>
                  {item.icon}
                </Box>
                <StyledTypography variant="h3" sx={{ fontWeight: "100" }}>
                  {item.heading}
                </StyledTypography>
                <Typography variant="body1" sx={{ padding: "1rem" }}>
                  {item.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
