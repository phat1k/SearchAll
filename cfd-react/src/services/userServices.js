import { API } from "../constant/api"



const userService = {
    getinfo() {
        console.log(`run`)
        const token = JSON.parse(localStorage.getItem('token') || null)
        return fetch(`${API}/user/get-info`, {
            headers: {
                "Authorization": `Bearer ${token.accessToken}`,
            },
        }).then(res => res.json())
    },
}
export default userService;