import './styleproduct.scss'
import  {Skeleton} from "../../../components/Skeleton"
// import  {Skeleton} from "@mui/material"

import Button__buy from '../../../components/ButtonBuy';
import { useDispatch } from 'react-redux';
const ProductCard = ({ titleProduct, price, sale , title , img, isFetching, loading, id, prices}) => {
    const dispatch = useDispatch()
    const handleAddCard = (id) =>{
        console.log('add card', id)

        dispatch({
            type:"UPDATE_QUANTITY",
            payload: id,
        })
       
    }
    if(loading) return (
        <div className="Product__container" >
            <Skeleton width={"100%"} height={200} className="dumbbell__icon"/>
            
            <Skeleton height={40} className="Product__title"/>
            <h2 className="Product__decription"></h2>
            {/* <p className="Product__price">{price/100000} USD
            <Button__buy color="" size="small" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
          </svg>
          }>
          Buy Now
        </Button__buy>
            </p>
            <p>{sale}</p> */}
        </div>
    )


    return (
        <div className="Product__container">
            {/* <Skeleton width={"100%"} height={200} style={{transform: 'scale(1)', marginBottom:'15px'}} /> */}
            <div className="dumbbell__icon">
                <img src={img} alt="" />
            </div>

            <h2 className="Product__title">{titleProduct}</h2>
            {/* <Skeleton height={38} style={{transform: 'scale(1)'}}/> */}
            <h2 className="Product__decription"></h2>
            {/* <p className="Product__price">{price/100000} USD
            <Button__buy onClick={handleAddCard} color="" size="small" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
            </svg>
            }>
                Buy Now
            </Button__buy>
            </p> */}
            <button onClick={()=>handleAddCard(id)}>buy now</button>
              {/* <Skeleton height={38} style={{transform: 'scale(1)'}}/> */}
            <p>{sale}</p>
            <p style={{color: "red", fontSize:"25px"}}>{price}</p>
            {/* <p>{prices}</p> */}
            {/* <Skeleton  height={38} style={{transform: 'scale(1)'}}/> */}

        </div>
    );
}
export default ProductCard;