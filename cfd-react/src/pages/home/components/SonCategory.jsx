import "./category.scss";
import { Link, useLocation } from "react-router-dom";
import Button__buy from "../../../components/ButtonBuy";
import { convertQueryToObject, reverse } from "../../../until";
import { useEffect, useState } from "react";
import userReducer from "../../../store/userReducer";
import { useSelector } from "react-redux";
import PriceRange from '../../../components/price'
const SonCategory = ({ menu = [], isLink }) => {
  // console.log(`menu`, menu);

  const [url, setUrl] = useState({})
  const params = useLocation();
  // useEffect(() => {
  //   const a = convertQueryToObject();
  //   setUrl(a);
  //   if (a.categories) localStorage.setItem("categories", a.categories);
  //   console.log('dddd', a)
  //   console.log('categories', a.categories)
  // }, [params.search]);
  return (
    <div className="list__category">
      <div className="listlink">
        {menu.map((tagItem, i) =>
        (
          <Link
              to={`/?${reverse({
                ...url,
                categories: tagItem.id,
              })}`}
            >
              <h2 key={i}>{tagItem.title}</h2>
            </Link>
            // <h2 key={i}>{tagItem.title}</h2>
          )
        )}
      </div>
      <PriceRange/>

      <Button__buy
        color="bright"
        size="large"
        type="icon-right"
        icon={
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        }
      >
        <Link to="category">Buy Now</Link>
      </Button__buy>
    </div>
  );
};
export default SonCategory;
