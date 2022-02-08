import IconLeft from "./components/iconLeft";
import IconRight from "./components/iconRight";
import Vector from "../../assets/img/Vector.svg";
// import queryString from 'query-string'
import "./style.scss";
import Freshnesecom from "../../assets/img/Freshnesecom.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userService from "../../services/userServices";
import { Link } from "react-router-dom";
import productServices from "../../services/productServices";
import { convertQueryToObject } from "../../until";
import { reverse } from "../../until";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { userinfo } = useSelector((store) => store.user);
  const { products } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  const { login, statusLogin } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);

  const [error, seterror] = useState();

  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (statusLogin) {
      getUser();
    }
  }, [statusLogin]);
  const [search, setSearch] = useState("")
  const getUser = async () => {
    let res = await userService.getinfo();
    if (res) {
      dispatch({
        type: "GETINFO",
        payload: res.data,
      });
      // dispatch(userLogin)
    }
  };
  const logoutAcout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
 
 
  const submitSearch = async (e) => {
    const res = await productServices.list(search)
    if (res) {
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data,
      });
    }
    console.log("resssssss", res);
  }

  const params = useLocation();
  // useEffect(() => {
  //   submitSearch();
  // }, [params.search]);
  // console.log(`withRouter`, params);

  return (
    <div className="searchbar__container">
      <div>
        <img src={Freshnesecom} alt="" />
      </div>
      <div className="search">
        <div className={`search__left ${isOpen ? "open" : "hide"}`}>
          <label for="fname" onClick={handleTitleClick}>
            All categories <img src={Vector} alt="" />
          </label>
          <div className="content">
            All categories
            <br />
            All categories
          </div>
        </div>
        <div className="search__right">
          <input
            type="text"
            name="search"
            placeholder="Search Products, categories ..."
            value={search}
            onChange={(e)=> setSearch(e.currentTarget.value)}
          ></input>
        </div>
        <div className="" onClick={submitSearch}>
          <Link to={`/?name=${search}`}>Search</Link>
        </div>
      </div>
      <div className="icon">
        {statusLogin && (
          <button className="btn__lougout" onClick={logoutAcout}>
            logout
          </button>
        )}
        <Link to="/login">
          <div style={{ color: `${statusLogin ? "red" : "black"}` }}>
            <IconLeft color="red" />
          </div>
        </Link>
        {statusLogin ? <p>{userinfo?.email}</p> : ""}
        <div className="icon-right">
          <IconRight />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
