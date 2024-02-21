import { Typography, styled } from "@mui/material";
import heroImage from "../assets/heroBanner.png";
const Hero = () => {
  const StyledHeroCaption = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",

    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
      lineHeight: 1.1,
      fontWeight: "semi-bold",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  }));
  return (
    <div>
      <img src={heroImage} alt="cover image" width="100%" />
      <StyledHeroCaption variant="h2" sx={{ textAlign: "center" }}>
        We empower individuals, solopreneurs and industries share and convert
        files swiftly
      </StyledHeroCaption>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        useFiles is a web app the Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga porro amet corporis ex, neque, maxime placeat vel
        inventore expedita repellat incidunt unde quod aliquid fugit deserunt
        magni adipisci assumenda quidem?
      </Typography>
    </div>
  );
};

export default Hero;
