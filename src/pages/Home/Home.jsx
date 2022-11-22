import { Navbar } from "../../components/Navbar/Navbar"
import { Aside } from "../../components/Aside/Aside"
import DayQuote from "../../components/DayQuote/DayQuote"
import QuoteList from "../../components/QuoteList/QuoteList"
import Footer from "../../components/Footer/Footer"

export const Home = () =>{
    return(
        <div className="home-page container">
            <Navbar/>
            <div className="home-main">
                <Aside/>
                <div className="home-content">
                    <DayQuote/>
                    <QuoteList/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}