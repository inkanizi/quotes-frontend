import { Navbar } from "../../components/Navbar/Navbar"
import { Aside } from "../../components/Aside/Aside"


export const Home = () =>{
    return(
        <div className="home-page container">
            <Navbar/>
            <div className="home-main">
                <Aside></Aside>
                <div className="quote-list">

                </div>
            </div>
        </div>
    )
}