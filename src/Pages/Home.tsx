import {
  Container,
  Box,
  Grid,
  Typography,
  styled,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import Hero from "../components/Hero";
import howItWorksImage from "../assets/howItWorksImg.png";
import { data } from "../homeData.ts";

const Home = () => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    paddingTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#15616d",

    borderRadius: "20px",
    [theme.breakpoints.up("md")]: {},
  }));

  return (
    <>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              repellat atque laborum asperiores tempore odio? Totam at
              doloremque in distinctio modi perspiciatis ex enim consectetur, ut
              autem quae ipsum aliquid.
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
      <Box sx={{ marginTop: "3rem" }}>
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
          This why lots of users come to us for the file needs
        </Typography>
        <Grid container spacing={3} sx={{}}>
          {data.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <Paper
                elevation={0}
                sx={{
                  border: "5px solid #15616d",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#f96c92",
                    cursor: "pointer",
                    transition: "background-color 0.5s",
                    color: "#fff",
                  },
                }}
              >
                <Box sx={{ textAlign: "center", fontSize: "2.5rem" }}>
                  {item.icon}
                </Box>
                <StyledTypography variant="h3">{item.heading}</StyledTypography>
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
