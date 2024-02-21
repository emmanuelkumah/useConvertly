import { Typography, Paper, styled } from "@mui/material";
import heroImage from "../assets/heroBanner.png";
const Hero = () => {
  const StyledHeroCaption = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontWeight: "400",
      textTransform: "capitalize",
    },
  }));

  const StyledHeroPaper = styled(Paper)(({ theme }) => ({
    padding: "2rem",
    borderRadius: "20px",
    [theme.breakpoints.up("md")]: {},
  }));
  return (
    <>
      <img src={heroImage} alt="cover image" width="100%" />
      <StyledHeroPaper elevation={0}>
        <StyledHeroCaption variant="h2" sx={{ textAlign: "center" }}>
          We empower individuals, solopreneurs and industries share and convert
          files swiftly 🚀
        </StyledHeroCaption>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", padding: "20px" }}
        >
          fileBox is a web app the Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga porro amet corporis ex, neque, maxime placeat
          vel inventore expedita repellat incidunt unde quod aliquid fugit
          deserunt magni adipisci assumenda quidem?
        </Typography>
      </StyledHeroPaper>
    </>
  );
};

export default Hero;
