import './style.scss';
import Category from '../../../components/category';
import ProductCard from '../components/ProductCard';
const FarmersMenu = () => {

 let listMenu = ['Best from Farmers', 'Carrots ', ' Tomatoes', 'Potatoes', 'Chicken','Pork'];
 const menu = [
    {
        titleProduct:"Category menu1", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu2", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu3", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
 ];
    return (
        <div className="product__container">
            <div className="item__product">
                <Category listMenu={listMenu} />
            </div>
            {menu.map( (e,i) =>  <div className="item__product "> 
            <ProductCard titleProduct={e.titleProduct} decription={e.decription} price={e.price} sale={e.sale} key={i}/></div>)}
        </div>
    );
}
export default FarmersMenu;