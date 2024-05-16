import './Footer.css'
import facebook from '../../assets/facebook.svg'
import X from '../../assets/twitter.svg'
import linked from '../../assets/linkedin.svg'

const Footer = ()=>{
    return(
        <div className="footer">
            <footer>
                <div className='info'>
                    <h3>Contact Information:</h3>
                    <p>Email: skill-sync@abc.com</p>
                    <p>Phone: +0222002</p>
                </div>
                <span className='xx'>
                    <span>
                        <h3>Privacy Policy</h3>
                        <h3>Terms of Service</h3>
                    </span>
                    <p>© [2024] SkillSync Connect. All rights reserved.</p>
                </span>
                <div className='last'>
                    <h3>Follow us</h3>
                    <span className='icons'>
                        <img src={facebook} alt="" /><img src={X} alt="" /><img src={linked} alt="" />
                    </span>
                  
                </div>
            </footer>
        </div>
    )
}
export default Footer