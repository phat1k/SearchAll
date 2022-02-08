import React from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Drawer } from '@mui/material'
import store from '../../store'

 const ModalCard = () => {
    const dispatch = useDispatch()
    const {isOpenCard} = useSelector( store => store.page)
    const {card} = useSelector( store => store.card)

    console.log("cardddddd",card)
    console.log("open",isOpenCard)
    
    return (
        <Drawer
        open={isOpenCard}
        
        onClose={()=>dispatch({type:"CLOSE_CARD"})}
        
        >
            Name: {card?.listItems?.product?.name}
            Quatity: {card?.totalQuantity}

            {
                card?.listItems?.map(e => (
                    <div>
                        Product Name: {e.product.name} <br />
                        <button>++</button>
                        <button>-</button>
                    </div>
                ))
            }
        </Drawer>
    )
}

export default ModalCard