// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";

function App() {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
