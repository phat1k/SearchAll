import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import productServices from "../../services/productServices";
import { convertQueryToObject } from "../../until";
import { reverse } from "../../until";


const PriceRange = () => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const submitPrice = (e) => {
        const a = convertQueryToObject();
        const price = reverse(a);
        const res = productServices.list(price)
        console.log("a", a)
        console.log("price", price)
    };
  return (
    <div>
        <input
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.currentTarget.value)}
        />
        <input
          type="number"
          name="maxPrice"

          value={maxPrice}
          onChange={(e) => setMaxPrice(e.currentTarget.value)}
        />
      <div onClick={submitPrice}><Link to={`/?minPrice=${minPrice}&maxPrice=${maxPrice}`}>submitPrice</Link></div>
    </div>
  );
};
export default PriceRange;
