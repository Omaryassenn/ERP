import Nav from "../Layout/nav";
import Footer from "../Layout/Footer";
import image from '../../assets/profile.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import CV from '../../assets/CV.svg'
import './EditProfile.css'
const EditProfile=()=>{
    return(
        <>
            <Nav></Nav>
            <main style={{minHeight:'100vh' , display:'flex' , alignItems:'baseline' , justifyContent:'center' }}>
                <div className="containe">
                <div style={{display:'flex' , alignItems:'center' , gap:'10rem' ,}}>
                    <div className="infoo" style={{display:'flex' , alignItems:'center' , gap:'1rem' , marginTop:'2rem'}}>
                        <img src={image} alt="" />
                        <span className="use">
                            <h3>Hagar Hussam</h3>
                            <p>Software Engineer</p>
                        </span>
                    </div>
                    <span style={{color:'white'}}>Edit</span>
                </div>
                <span style={{display:'flex' , gap:'5px'}}>
                  <img src={mail} alt="" />  <p>HagarHussam@gmail.com</p>
                </span>
                <span style={{display:'flex' , gap:'5px'}}>
                  <img src={phone} alt="" />  <p>01149240296</p>
                </span>
                <span style={{display:'flex' , gap:'5px' ,flexDirection:'column',border:'2px solid white' , padding:'10px' , borderRadius:'5px'}}>
                 <span className="hd" style={{display:'flex' , gap:'5px' , justifyContent:'space-between' , }}>
                    <p>Resume</p>
                    <p>Edit</p>
                 </span>
                 <span style={{display:'flex' , gap:'19px' ,alignItems:'center'}}>
                    <img src={CV} alt="" id="cv"/> <p>HagarHussam.pdf</p>
                 </span>
                </span>
                <span className="Edu" style={{display:'flex' ,flexDirection:'column'}}>
                    <p style={{marginBottom: '-9px'}}>Education Level</p>
                    <p style={{border:'2px solid white' , padding:'10px' , borderRadius:'5px'}}>Bachelor's Degree</p>
                </span>
                <span className="Edu" style={{display:'flex' ,flexDirection:'column'}}>
                    <p style={{marginBottom: '-9px'}}>Experience</p>
                    <p style={{border:'2px solid white' , padding:'10px' , borderRadius:'5px'}}>1 - 2 Years</p>
                </span>
                </div>
            </main>
            <Footer></Footer>
        </>

    )
}
export default EditProfile;