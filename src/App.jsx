import Header from "./components/Header";
import Banner from "./components/Banner";
import DonationCards from "./components/donationCard";
import Footer from "./components/Footer";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <DonationCards />
      <Footer />
    </div>
  );
}

export default App;
