import SearchBar from "../Layout/SearchBar";
import SideBar from "../Layout/sideBar";
import Nav from "../Layout/nav";
import Footer from "../Layout/Footer";
import './FindSeekers.css'
import Seeker from "../Layout/Seeker";
const FindSeekers = ()=>{
    return(
        <>
        <div className="contain">
            <Nav className='navv'></Nav>
            <main>
                <SideBar></SideBar>
                <div className="mai">
                <SearchBar></SearchBar>
                <Seeker></Seeker>
                </div>
            </main>
           
            <Footer></Footer>
        </div>
        </>
    )
}
export default FindSeekers;