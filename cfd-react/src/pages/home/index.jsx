import ProductMenu from "./BestProducts";
import CategoryMenu from "./CategoryMenu";
// import FarmersMenu from "./BestFarmers";
import Customers from "./OurCustomers";
import Blog from "./Blog";
// import Headline from './Headline'

const HomePage = () => {
    return ( 
        <div className="homepage">
            
            <CategoryMenu />
            <ProductMenu/>
            {/* <FarmersMenu /> */}
            <Customers/>
            <Blog/>
            {/* <Headline/> */}
        </div>
    );
}
export default HomePage;