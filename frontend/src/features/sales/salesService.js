import axios from 'axios'

const API_URL = 'http://3.113.26.186:5000/api/lpg'

// Create new sales
const createSales = async (salesData, token) => {
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, salesData, config)

    return response.data
}

// Get user sales
const getSales = async (token) => {
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user sales
const deleteSales = async (salesId, token) => {
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + salesId, config)

    return response.data
}

const saleservice = {
    createSales,
    getSales,
    deleteSales,
}

export default saleservice