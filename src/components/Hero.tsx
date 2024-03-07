import { Typography, Paper, styled, Box } from "@mui/material";
import heroImage from "../assets/banner.png";
const Hero = () => {
  const StyledHeroCaption = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontWeight: "400",
      textTransform: "capitalize",
    },
  }));

  const StyledHeroPaper = styled(Paper)(() => ({
    padding: "2rem",
    borderRadius: "20px",
    borderTop: "7px solid #f50a4a",
  }));
  return (
    <Box id="home">
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <img src={heroImage} alt="cover image" width="70%" />
      </Box>
      <StyledHeroPaper elevation={0}>
        <StyledHeroCaption variant="h2" sx={{ textAlign: "center" }}>
          We empower individuals, solopreneurs and industries
        </StyledHeroCaption>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.4rem",
            fontWeight: "800",
            color: "#15616D",
          }}
        >
          Convert & Transfer files swiftly 🚀
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", padding: "20px" }}
        >
          fileBox is a web app that empowers everyone to easily convert file
          from one format to the other
        </Typography>
      </StyledHeroPaper>
    </Box>
  );
};

export default Hero;
