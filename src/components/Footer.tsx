import { Typography, Box, Divider, styled } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  const StyledFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0d3a41",
    color: "#fff",
    borderRadius: "20px",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));
  return (
    <>
      <Divider variant="fullWidth" sx={{ marginTop: "3rem" }} />
      <StyledFooter>
        <Logo />
        <Typography variant="body1" sx={{ paddingTop: "0.7rem" }}>
          © 2024 Filebox ltd. All rights reserved.
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingTop: "0.7rem", paddingLeft: "0.3rem" }}
        >
          Made in 🇬🇭 by E.F.Kumah
        </Typography>
      </StyledFooter>
    </>
  );
};

export default Footer;
