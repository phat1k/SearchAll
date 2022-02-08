
import './customers.scss'
import icon from '../../../assets/img/icon.png'
const CardCustomers = ({content, namecard}) => {

    return (
        <div className="cardcustomers__container">
            <p>{content}</p>
            <h2>{namecard}</h2>
            <div className="icon__image">
                <img src={icon} alt="" />
            </div>
        </div>
    );
}
export default CardCustomers;