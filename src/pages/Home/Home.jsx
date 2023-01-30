import { Navbar } from "../../components/Navbar/Navbar";
import { Aside } from "../../components/Aside/Aside";
import DayQuote from "../../components/DayQuote/DayQuote";
import QuoteList from "../../components/QuoteList/QuoteList";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";

export const Home = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="home-page container">
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <div className="home-main">
        {isMobile ? <h1>Контент</h1> : <Testing />}
      </div>
    </div>
  );
};

const Testing = () => {
  return (
    <>
      <Aside />
      <div className="home-content">
        <DayQuote />
        <QuoteList />
      </div>
    </>
  );
};
