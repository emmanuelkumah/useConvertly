import { Typography, Box, Divider, styled, Container } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  const StyledFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0d3a41",
    color: "#fff",
    padding: "0.5rem",
    marginTop: "3rem",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));
  return (
    <>
      <StyledFooter>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: { xs: "flex", md: "flex" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              paddingTop: "0.7rem",
              fontSize: { xs: "0.5rem", sm: "0.7rem" },
            }}
          >
            © 2024 Filebox ltd. All rights reserved.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingTop: "0.7rem",
              paddingLeft: "0.3rem",
              fontSize: { xs: "0.5rem", sm: "0.7rem" },
            }}
          >
            Made in 🇬🇭 by E.F.Kumah
          </Typography>
        </Box>
      </StyledFooter>
    </>
  );
};

export default Footer;
