import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        background: "#0d3a41",
        width: "100%",
        bottom: "20",
        flexGrow: 1,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "#fff", padding: "1rem", fontSize: "0.8rem" }}
      >
        © FileBox v2.0.1 All rights reserved (2024)
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#fff", padding: "1rem", fontSize: "0.8rem" }}
      >
        Made in 🇬🇭 by E.F.Kumah
      </Typography>
    </Box>
  );
};

export default Footer;
