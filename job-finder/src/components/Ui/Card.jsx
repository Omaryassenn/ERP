import icon from '../../assets/arrowleft.svg'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({Text , link})=>{
return(
    <div className='container'>
        <p>
            {Text}
        </p>
        <span>
           <Link to={link}> <img src={icon} alt="" /></Link>
        </span>
    </div>
)
}
export default Card