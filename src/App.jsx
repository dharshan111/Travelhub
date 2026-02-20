import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Travelplace from "./components/Travelplace";
import Product from "./components/Product";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Booknow from "./pages/Booknow";

function App() {
  return (
    <>
      <Container sx={{ padding: "12px" }}>
        <Header />
          <Hero />
          <Product />
          <Travelplace />
          <Book />
          {/* <Contact /> */}

      </Container>
      {/* <Booknow /> */}
    </>
  );
}

export default App;
