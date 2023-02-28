import axios from 'axios'

const API_URL = ''

// Login user
const login = async (userData: LoginType) => {
   const response = await axios.post(API_URL + 'login', userData)

   if (response.data) {
      //localStorage.setItem('user', JSON.stringify(response.data))
   }

   return response.data
}

const authService = {
   login,
}

export default authService
