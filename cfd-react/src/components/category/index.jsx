import SonCategory from '../../pages/home/components/SonCategory'
import './style.scss'
// import Button__buy from '../ButtonBuy'
const Category = ({listMenu=[],titleFirst }) => {
    return(
        <div className="category">
            <h3>{titleFirst}</h3>
        <SonCategory menu={listMenu}  />
         
        </div>
    )
}
export default Category;