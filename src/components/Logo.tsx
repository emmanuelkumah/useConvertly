import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const Logo = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontFamily: "Martel Sans",
              fontSize: "1.5rem",
            }}
          >
            <FileOpenIcon />
            File
            <span style={{ fontWeight: "100", fontFamily: "Open Sans" }}>
              Box
            </span>
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Logo;
