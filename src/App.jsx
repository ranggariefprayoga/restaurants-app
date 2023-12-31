/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePages";
import DetailPage from "./pages/DetailPage";
import "./main.css";
import Navigation from "./component/Navigation";
import FavoritePage from "./pages/FavoritePage";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main className="p-9 bg-[#212A3E]">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
