import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Travelplace from "./components/Travelplace";
import Product from "./components/Product";
import Book from "./components/Book";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Container sx={{padding:"12px",}}>
     
        <Header />

        <Hero />
        <section id="products">
        <Product />
        </section>
        <section id="travel">
        <Travelplace />
        </section>
        <section id="book">
        <Book />
        </section>
        {/* <Contact /> */}
      </Container>
    </>
  );
}

export default App;
