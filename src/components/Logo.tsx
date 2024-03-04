import { Link } from "react-router-dom";
import logo from "../assets/fileboxLogo.png";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link to="/">
          <img
            src={logo}
            alt="fileBox Logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Link>
      </Box>
    </>
  );
};

export default Logo;
