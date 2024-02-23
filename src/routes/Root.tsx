import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const Root = () => {
  return (
    <div>
      <Navigation />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
