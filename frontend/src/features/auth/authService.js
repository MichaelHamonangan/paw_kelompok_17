import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

// Register user
const register = async (userData) => {
    // const response = await axios.post(`http://localhost:5000/api/register`, userData)

    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }

    // return response.data


    let config = {
        headers : {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }
    console.log("data " + userData)
    await axios
    .post(API_URL + "register", userData, config)
    .then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response);
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    });
}

// Login user
const login = async (userData) => {
    // const response = await axios.post("http://localhost:5000/api/login" + 'login', userData)

    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }

    // return response.data

    let config = {
        headers : {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }
    console.log("data " + userData)
    await axios
    .post(API_URL + "login", userData, config)
    .then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response);
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    });
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}


export default authService