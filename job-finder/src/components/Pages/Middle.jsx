import './Middle.css'
import Card from '../Ui/Card';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
const Middle = ()=>{
    return(
        <>
        <Header></Header>
        <div className="main-home">
            <div className="first-row">
                <h1>
                    At Skill-Sync
                </h1>
                <p>
                we believe in the power of skills synchronization to unlock new possibilities and propel careers forward.
                </p>
                <p> Join us today and discover a world of endless opportunities awaiting you.</p>
            </div>
            <hr />
            <div className="scnd-row">
                <div className="left">
                    <h3>Job seekers</h3>
                    <Card Text={'Upload and manage your CV'} link={'/completeprofile'} ></Card>
                    <Card Text={'Access CV templates and customize your profile'} link={'/templates'}></Card>
                    <Card Text={'Highlight skills, experience, achievements'}></Card>
                </div>
                <div className="right"><h3>Employers</h3>
                    <Card Text={'Streamlined candidate search'}></Card>
                    <Card Text={'Matchmaking based on job and skills'}></Card>
                    <Card Text={'Access diverse talent pool'} link={'/find'}></Card></div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Middle;