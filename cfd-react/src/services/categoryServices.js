
import { API } from "../constant/api"

const categoryServices ={
    listCategory(){
        return fetch (`${API}/categories`).then(res => res.json())
    }
}
export default categoryServices;