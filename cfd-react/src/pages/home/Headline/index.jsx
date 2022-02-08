import Button__buy from '../../../components/ButtonBuy'
import './style.scss'
import ProductCard from '../components/ProductCard';
const menu = [
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
    {
        titleProduct:"Category menu", 
        decription:"Space for a small product description ",
        price: "1.48 USD",
        sale: "48.56"
    },
 ];
    
const Headline = () => {
    return (
        <div className="headline__parent">
            <div className="title__headline">
                <p>Read our headline posts</p>
                <Button__buy color="" size="large" type="icon-right" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                </svg>
                }>
                Read recepies 
                </Button__buy>
            </div>
            <div className="headline">
                
            {menu.map( (e,i) =>  <div className="item__product "> <ProductCard titleProduct={e.titleProduct} decription={e.decription} price={e.price} sale={e.sale} key={i}/></div>)}

                </div>  
        </div>
    );
}
export default Headline;