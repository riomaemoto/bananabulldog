import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AllMenu } from "./pages/AllMenu";
import Footer from "./pages/Footer";
import { Home } from "./pages/home";
import { TopPage } from "./pages/TopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<TopPage />} />
        <Route path="/menu" element={<AllMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
