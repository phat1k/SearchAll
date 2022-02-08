import './banner.scss';
import Button__buy from '../../../components/ButtonBuy'
// import Button__buy from '../../../../components/ButtonBuy';
// import Button__banner from './component/Button/index.jsx'

const Banner = () => {
    return (
        <div className="Banner__container">
            <h3 className="Banner__subfocus">Banner subfocus</h3>
            <p className="Banner__Space">Space for heading</p>
            <Button__buy color="stroke" size="large" type="icon-right" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
            </svg>
            }>
            Read recepies 
            </Button__buy>
        </div>
    );
}
export default Banner;