import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Box } from "@mui/material";

const Root = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navigation />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Root;
