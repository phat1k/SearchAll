import React from 'react'
import checkout from '../../assets/img/checkout.jpg'
import './style.scss'

 const CardSummary = ({titleSummary, Farm, Freshness, img, price, sale}) => {
    return (
        <div className="card_summary">
            <div className="summary_left">
                <img src={checkout} alt="" />
                <p><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.65559 1.44501C7.13297 0.967619 7.78045 0.699425 8.45559 0.699425C9.13072 0.699425 9.7782 0.967619 10.2556 1.44501C10.733 1.9224 11.0012 2.56988 11.0012 3.24501C11.0012 3.92014 10.733 4.56762 10.2556 5.04501L9.60059 5.70001L6.00059 9.30001L2.40058 5.70001L1.74558 5.04501C1.26819 4.56762 1 3.92014 1 3.24501C1 2.56988 1.26819 1.9224 1.74558 1.44501C2.22297 0.967619 2.87045 0.699425 3.54558 0.699425C4.22072 0.699425 4.86819 0.967619 5.34558 1.44501L6.00059 2.10001L6.65559 1.44501Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg> Wishlist
            </p>
            <p><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 0.999969H1.75C1.19772 0.999969 0.75 1.44768 0.75 1.99997V3.99997C0.75 4.55225 1.19772 4.99997 1.75 4.99997H3.75C4.30228 4.99997 4.75 4.55225 4.75 3.99997V1.99997C4.75 1.44768 4.30228 0.999969 3.75 0.999969Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M3.75 6.99997H1.75C1.19772 6.99997 0.75 7.44768 0.75 7.99997V9.99997C0.75 10.5523 1.19772 11 1.75 11H3.75C4.30228 11 4.75 10.5523 4.75 9.99997V7.99997C4.75 7.44768 4.30228 6.99997 3.75 6.99997Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M9.25 7.99994H6.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M8.25 9.99997H6.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M8.25 3.99997H6.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M9.25 1.99994H6.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg> Compare</p>
            <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.18031 9.18004L2.82031 2.82004" stroke="#151515" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M9.18031 2.82004L2.82031 9.18004" stroke="#151515" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg> Remove</p>
            </div>
            <div className="summary_right">
                <p className="title">{titleSummary}</p>
                <p className="farm"><span>farm:</span>  {Farm}</p>
                <p className="freshness"><span>Freshness:</span>  {Freshness}</p>
                <p className="imgg">{img}{img}{img}</p>
                <p className="price">{price}</p>
                <p className="sale">{sale}</p>
            </div>
        </div>
    )
}
export default CardSummary