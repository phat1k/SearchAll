import "./style.scss";
import SonCategory from "../../home/components/SonCategory";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import productServices from "../../../services/productServices";
import { useDispatch, useSelector } from "react-redux";
import categoryServices from "../../../services/categoryServices";

import { convertQueryToObject, reverse } from "../../../until";
import { Link, useLocation } from "react-router-dom";


const ProductMenu = () => {
  let listMenu = [
    "Best selling products",
    "Kitchen ",
    " Meat and fish ",
    "Special nutrition",
    "Pharmacy",
    "Baby",
  ];
  const menu = [
    {
      titleProduct: "Category menu",
      decription: "Space for a small product description ",
      price: "1.48 USD",
      sale: "48.56",
    },
    {
      titleProduct: "Category menu",
      decription: "Space for a small product description ",
      price: "1.48 USD",
      sale: "48.56",
    },
    {
      titleProduct: "Category menu",
      decription: "Space for a small product description ",
      price: "1.48 USD",
      sale: "48.56",
    },
  ];
  const { loginStatus } = useSelector((store) => store.auth);
  const { product } = useSelector((store) => store.card);
  const { category } = useSelector((store) => store.user)
  const{id} = category

  const params = useLocation();

  const dispatch = useDispatch();
  // const[product ,setProducts] = useState([])
  useEffect(() => {
    (async () => {
      // const categories = localStorage.getItem("categories")
      // const page = localStorage.getItem("page")
      // const search = localStorage.getItem("search")

      const res = await productServices.list(params.search);
      // setProducts(res.data)
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data,
      });
    })();
  }, [params.search]);
  const [IsCategory, setIsCategorys] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await categoryServices.listCategory();
      console.log(res);
      setIsCategorys(res);
      dispatch({
        type: "GETCATEGORY",
        payload: res,
      });
    })();
  }, []);
  const [num, setNum] = useState();
  const changeNumber = (num) => {
    setNum(num);
    console.log(num)
  };

  const [url, setUrl] = useState({});

  
  // const changePage = () => {
  //   const a = convertQueryToObject();
   
  // }
  
  return (
    <div className="product__container">
      <div className="item__product card__menu">
        <div className="category">
          <h3>Best selling products</h3>
          <SonCategory menu={IsCategory} isLink={true}/>
        </div>
      </div>
      <div className="card__product">
        {product.map((e, i) => (
          <div className="item__product ">
            <ProductCard
              titleProduct={e.name}
              price={e.discount}
              prices={e.price}
              sale={e.discount_rate}
              id={e._id}
              img={e.images[0].medium_url}
              key={i}
            />
          </div>
        ))}
        {/* <Link
          to={`/?${reverse({
            ...url,
            page: 1,
            name: localStorage.getItem("search"),
            categories: localStorage.getItem("categories"),
          })}`}
        >
          1
        </Link>
        <Link
          to={`/?${reverse({
            ...url,
            page: 2,
            name: localStorage.getItem("search"),
            categories: localStorage.getItem("categories"),
          })}`}
        >
          2
        </Link>
        <Link
          to={`/?${reverse({
            ...url,
            page: 3,
            name: localStorage.getItem("search"),
            categories: localStorage.getItem("categories"),
          })}`}
        >
          3
        </Link> */}

        

      </div>
    </div>
  );
};
export default ProductMenu;
