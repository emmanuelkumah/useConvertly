import { Container, Box, Grid, Typography, Button, Stack } from "@mui/material";
import Hero from "../components/Hero";
import howItWorksImage from "../assets/howItWorksImg.png";
import { theme } from "../theme";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Hero />
        <Box sx={{ marginTop: "4rem" }}>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, repellat atque laborum asperiores tempore odio? Totam
                at doloremque in distinctio modi perspiciatis ex enim
                consectetur, ut autem quae ipsum aliquid.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ marginTop: "1.5rem" }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  href="#"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Convert Files for free
                </Button>
                <Button
                  variant="outlined"
                  href="#"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "#080708",
                    },
                  }}
                >
                  Transfer files for free
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={howItWorksImage} width="100%" alt="How fileBox works" />
            </Grid>
          </Grid>
        </Box>
        <h2>Website content 2</h2>
        <h2>Testimonials</h2>
      </Container>
    </>
  );
};

export default Home;
