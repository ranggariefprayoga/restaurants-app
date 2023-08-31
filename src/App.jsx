/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePages";
import DetailPage from "./pages/DetailPage";
import "./main.css";
import Navigation from "./component/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="p-9 bg-[#f5f5f5]">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;