import icon from '../../assets/arrowleft.svg'
import './Card.css'
const Card = ({Text})=>{
return(
    <div className='container'>
        <p>
            {Text}
        </p>
        <span>
            <img src={icon} alt="" />
        </span>
    </div>
)
}
export default Card