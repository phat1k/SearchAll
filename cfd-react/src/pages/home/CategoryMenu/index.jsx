import { useContext } from 'react';
import Banner from '../components/Banner';
import Category from '../../../components/category';
import './style.css';
import {Breadcrumbs} from '../../../components/breadcrumbs'
import { useSelector } from 'react-redux';

const CategoryMenu = () => {
    const { category } = useSelector( store => store.user)
     const listMenu = ['Category menu', 'Bakery ', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Kitchen']
    const linkHome=['Home', 'Category']

    console.log("category",category)
    return (
        <div className="category__container">
            <Breadcrumbs >{linkHome}</Breadcrumbs>
            <div className="item__category"><Category titleFirst="Category menu" listMenu={category.slice(1, 5)} /> </div>
            <div className="item__category " title="Kitchen,Meat and fish"><Banner /></div>
            <div className="item__category "><Banner /></div>
        </div>
    );
}
export default CategoryMenu;