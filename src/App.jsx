import { Routes, Route } from "react-router-dom";
import HeroSection from "./Component/Dashboard/HeroSection";
import UserData from "./Component/Dashboard/UserData";
import Nav from "./Component/Navbar/Nav";
import AboutUs from "./Component/AboutUs"; 
import Rewards from "./Component/Dashboard/Rewards";
import Loan from "./Component/Loan";

function App() {
  return (
    <div className="bg-[#00040f] min-h-screen">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <UserData />
              <Rewards/>
              <Loan/>
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

