import Vector from '../../assets/img/Vector.svg';
import { useState } from 'react';
import './sideson.scss';

const SideSon = ({tag}) => {
    // const {tag} = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className={`sideson ${isOpen ? "open" : "hide"} `}>
            <h2 onClick={handleTitleClick}>{tag} <img src={Vector} alt="" /> </h2>
            {/* {tag.map((item_tag,i) => <h2 key={i} >{item_tag} 
            </h2>)} */}
            <div className="content">sdfsd</div>
        </div>
    )
}
export default SideSon
// className={`sideson ${isOpen ? "open" : "hide"} `}
// {tag.map((item_tag,i) => <h2 key={i} 
//             onClick={handleTitleClick}
//             >{item_tag} 
//             <img src={Vector} alt="" /></h2>)}