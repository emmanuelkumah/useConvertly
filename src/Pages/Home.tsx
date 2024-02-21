import { Container } from "@mui/material";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Hero />
        <h2>Website Content 1</h2>
        <h2>Website content 2</h2>
        <h2>Testimonials</h2>
      </Container>
    </>
  );
};

export default Home;
