import './style.scss';
import classnames from 'classnames';
import avt from '../../assets/img/avt.jpg'
const Card__Blog = ({ size }) => {
    return (
        <div className={classnames('blog__container', `size-${size}`)}>
            <div className="img__blog">
                <img src={avt} alt="" />

            </div>
            <div className="tag__blog" >Vegetable</div>

            {/* <Son tag=["test"] */}
            <div className="content">
                <h2>Which vegetable your family will love and want’s eat each day</h2>
                <div className="blog-date">
                    <p>Author</p>
                    <p>14.1.2020</p>
                </div>
            </div>
        </div>
    );
}
export default Card__Blog;