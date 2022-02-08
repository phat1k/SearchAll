import './style.scss';
import classnames from 'classnames';

const Button__buy = (props) => {
    const {children, color="default", type="default", size="small", round = false, icon, handleClick} = props
    return (
        <button onClick={handleClick} className={classnames('button__container', `color-${color}`, `type-${type}`, `size-${size}`, `type=${type}`, {round})} >
            {type == 'icon-left' && icon}
            <a href="#">{children}</a>
            {type == 'icon-right' && icon}
        </button>
    );
}

export default Button__buy;