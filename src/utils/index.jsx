import axios from "axios" 
const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
    baseURL: productionUrl
})


export const formatPrice = price => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2))

    return dollarsAmount
}


export const generateAmountOptions = number => {
    let amount
    return Array.from({length: number}, (_, index) => {
        amount = index + 1;
        return <option key={index} value={amount}>{amount}</option>
    })
}

