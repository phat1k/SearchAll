// import './style.css';
import Flickity from "react-flickity-component"
import React from 'react';
import CardCustomers from '../components/CardCustomers'
import './style.scss'
import Button__buy from "../../../components/ButtonBuy";
const Customers = () => {

    const flickityOptions = {
        initialIndex: 2,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,

    }
    return (
        <div className="Customers">
            <div className="top__carcustomers">
                <h2>Our customers says</h2>
                <Button__buy color="" size="large" type="icon-right" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                </svg>
                }>
                    Buy Now
                </Button__buy>
            </div>

                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />
                    <CardCustomers content={"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"} namecard={"Name and Surname"} />


                </Flickity>
        </div>

    );
}
export default Customers;