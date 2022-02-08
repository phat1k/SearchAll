import SideSon from './SideSon';
import './style.scss';
const SideMenu = () => {
    const tag = ['Bakery','Fruit and vegetables','Fruit and vegetables','Drinks','Kitchen','Special nutrition','Baby','Pharmacy'];
    return(
        <div className="silemenu">
            {/* <Side__son tag={tag}/>  */}
           {tag.map( (e,i) => <SideSon key={i} tag={e}/>)}
           {/* <Side__son tag="Bakery"/> 
           <Side__son tag="Fruit and vegetables"/> 
           <Side__son tag="Fruit and vegetables"/> 
           <Side__son tag="Drinks"/> 
           <Side__son tag="Kitchen"/> 
           <Side__son tag="Special"/> 
           <Side__son tag="Baby"/>  */}
          
           
          
           
        </div>
    )
}
export default SideMenu

