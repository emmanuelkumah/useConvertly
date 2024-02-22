import { Typography, Paper, styled } from "@mui/material";
import heroImage from "../assets/heroBanner.png";
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
    <>
      <img src={heroImage} alt="cover image" width="100%" />
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
          Share, Sign and Convert files swiftly 🚀
        </Typography>
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
