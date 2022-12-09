import axios from 'axios'
// import * as dotenv from 'dotenv'

// import { useNavigate } from 'react-router-dom'
// import { redirect } from 'react-router-dom'
// import { toast } from 'react-toastify'


// dotenv.config( { path : '../frontend/.env'} )
// const baseURL = process.env.API_URL
const API_URL = process.env.REACT_APP_API_KEY

// Register user
const register = async (userData) => {
    let config = {
        headers : {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }
    // console.log("data " + userData)
    await axios
    .post(API_URL + "/register", userData, config)
    .then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
        // console.log(response);
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    });
}

// Login user
const login = (userData) => {
    let config = {
        headers : {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }
    // console.log("data " + userData)
    return axios
    .post(API_URL + "/login", userData, config)
    .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data))
        // console.log(response);
        return Promise.resolve(response.data)
    })
    .catch(function (error) {
        return Promise.reject(error.response.data)
    });
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
    return Promise.resolve("Logout successful")
}

// const logout = () => (dispatch) => {
//     localStorage.removeItem('user')
//     dispatch({
//         type: logout,
//         payload: "Logout successful"
//     })
//     return Promise.resolve("Logout successful")
// }

const authService = {
    register,
    logout,
    login,
}


export default authService