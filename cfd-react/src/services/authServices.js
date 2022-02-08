import { API } from "../constant/api"

const authService = {
    login(data) {
        console.log(`run`)
        return fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
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
export default authService;

