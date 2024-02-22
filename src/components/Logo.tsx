import logo from "../assets/fileboxLogo.png";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img
          src={logo}
          alt="fileBox Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </Box>
    </>
  );
};

export default Logo;
