import './style.scss'
import Son from './Son'
import { useContext } from 'react';
// import {CheckContext} from '../../context/CheckCotext';

const Footer = () =>{
    let tag =  ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chilli peppers', 'Broccoli',
     'Watermelons', 'Oranges', 'Bananas', 'Grapes', 'Cherries', 'Meat', 'Seo tag', 'Fish', 'Seo tag', 'Fresh food', 'Lemons'];
     
     return(

        <div className="container__footer">

            <div className="footer__tag">
                <div className="item__tag__title"><h3>Get in touch</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Blog</p>
                </div>
                <div className="item__tag__title"><h3>Connections</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>LinkedIn</p>
                </div>
                <div className="item__tag__title"><h3>Earnings  </h3>
                    <p>Become an Affiliate</p>
                    <p>Advertise your product</p>
                    <p>Sell on Market</p>
                </div>
                <div className="item__tag__title"><h3>Account</h3>
                    <p>Your account</p>
                    <p>Returns Centre</p>
                    <p>100 % purchase protection</p>
                    <p>Chat with us</p>
                    <p>Help</p>
                </div>
            </div>
            <h2>Product App</h2>
            <div className="item__footer">
                {tag.map((e,i) => <Son key={i} tag={e}/>)}
            </div>
            <p>Copyright © 2020 petrbilek.com</p>
        </div>
    )
}
export default Footer