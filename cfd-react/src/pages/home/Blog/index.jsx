import Card__Blog from "../../../components/CardBlog";
import Button__buy from '../../../components/ButtonBuy'
import './style.scss'

const Blog = () => {
    return (
        <div className="blog__parent">
            <div className="title__blog">
                <p>Read our Blog posts</p>
                <Button__buy color="" size="large" type="icon-right" icon={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                </svg>
                }>
                Read recepies 
                </Button__buy>
            </div>
            <div className="blog">
                
                <Card__Blog className="large_blog" size='large'/>
                <Card__Blog className="medium-blog" size=""/>
                <div className="item__last">
                    <Card__Blog className="small_blog" size='small'/>
                    <Card__Blog className="small_blog" size='small'/>
                    <Card__Blog className="small_blog" size='small'/>
                </div>
                </div>  
        </div>
    );
}
export default Blog;