import {
    API
} from "../constant/api"

const cardService = {
    getCard() {
        const token = JSON.parse(localStorage.getItem("token"))
        return fetch(`${API}/ecommerce/v1/cart`, {
            headers: {
                "Authorization": "Bearer " + token.accessToken
            }
        }).then(res => res.json())
    },
    updateQuantity(data) {
        const {
            id,
            quantity, 
            token
        } = data;

        console.log("data", data)
        return fetch(`${API}/ecommerce/v1/cart/quantity/${id}`, {
            method:"PUT",
            headers: {
                "Authorization": "Bearer " + token.accessToken

            },
            body: JSON.stringify(quantity)
        }).then((res) => res.json())
    }

}
export default cardService