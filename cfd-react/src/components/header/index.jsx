import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
const Header = () => {
    const dispatch = useDispatch()
    const { user } = useSelector( store => store.auth)
    return (
        <div className="header__container">
            <div className="header__left">
                <p>Chat with us{user?.name}</p>
                <p>+420 336 775 664</p>
                <p>info@freshnesecom.com</p>
            </div>
            <div className="header__right">
                <p>{user?.name}</p>
                <p>Blog</p>
                <p>About Us</p>
                <p>Careers</p>
                <button onClick={()=>dispatch({type:'OPEN_CARD'})}>open card</button>
            </div>

        </div>
    );
}
export default Header;