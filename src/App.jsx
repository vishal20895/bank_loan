import { Routes, Route } from "react-router-dom";
import HeroSection from "./Component/Dashboard/HeroSection";
import UserData from "./Component/Dashboard/UserData";
import Nav from "./Component/Navbar/Nav";
import AboutUs from "./Component/AboutUs"; 
import Rewards from "./Component/Dashboard/Rewards";
import Loan from "./Component/Loan";
import Bils from "./Component/Dashboard/Bils";
import Cards from "./Component/Dashboard/Card";
import Review from "./Component/Dashboard/Review";
import Brands from "./Component/Dashboard/Brands";
import Service from "./Component/Dashboard/Service";
import Footer from "./Component/Dashboard/Footer";

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
              <Bils/>
              <Cards/>
              <Review/>
              <Brands/> 
              <Service/>
              <Footer/>
              {/* <Loan/> */}
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

