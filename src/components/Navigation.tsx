import { Box } from "@mui/material";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Logo />
      <section>Menu items here</section>
    </Box>
  );
};

export default Navigation;
