import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Browse from "./components/Browse";
import Checkout from "./components/Checkout";
import FinishOrder from "./components/FinishOrder";
import Review from "./components/Review";
import Footer from "./components/Footer";

import Dark_Souls_3 from "./components/games/Dark_Souls_3";
import Forest from "./components/games/Forest";
import GTA_5 from "./components/games/GTA_5";
import Last_Of_Us from "./components/games/Last_Of_Us";
import Minecraft from "./components/games/Minecraft";
import Outlast_2 from "./components/games/Outlast_2";
import Poppy_Playtime from "./components/games/Poppy_Playtime";
import Pubg from "./components/games/Pubg";
import Resident_Evil_7 from "./components/games/Resident_Evil_7";
import Slender_Arrival from "./components/games/Slender_Arrival";
import Witcher_3 from "./components/games/Witcher_3";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Browse" element={<Browse />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="FinishOrder" element={<FinishOrder />} />
        <Route path="Review" element={<Review />} />

        <Route path="Dark_Souls_3" element={<Dark_Souls_3 />} />
        <Route path="Forest" element={<Forest />} />
        <Route path="GTA_5" element={<GTA_5 />} />
        <Route path="Last_Of_Us" element={<Last_Of_Us />} />
        <Route path="Minecraft" element={<Minecraft />} />
        <Route path="Outlast_2" element={<Outlast_2 />} />
        <Route path="Poppy_Playtime" element={<Poppy_Playtime />} />
        <Route path="Pubg" element={<Pubg />} />
        <Route path="Resident_Evil_7" element={<Resident_Evil_7 />} />
        <Route path="Slender_Arrival" element={<Slender_Arrival />} />
        <Route path="Witcher_3" element={<Witcher_3 />} />

        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
