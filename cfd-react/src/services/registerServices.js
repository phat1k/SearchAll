import { API } from "../constant/api"


const registerService ={
    formRegister(data){
        return fetch(`${API}/register`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        }).then( res => res.json())
    }
}
export default registerService