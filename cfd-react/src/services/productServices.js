import {
    API
} from '../constant/api'
import queryString from 'query-string'
import {
    useSelector
} from 'react-redux'
import { reverse } from '../until'






const productServices = {

    list(data) {
     
        // return fetch(`${API}/product?name=${search ? search : ""}`).then(res => res.json());
       

        // search = "name=&limit=50&catagories=1198";

        // const params = toObject(search);

        // params = {
        //     name:"",
        //     limit:50,
        //     catagories:1198,
        // }

        // const finalObj = checkParams(params);
        
        
        // finalObj = {limit:50,catagories: 1198}

        // const finalString = reverse(finalObj)

        // finalString = "limit=50&catagories=1198"

        return fetch(`${API}/product${data}`).then(res => res.json())


    }
}
export default productServices