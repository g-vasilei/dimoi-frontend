import axios from 'axios'

const API_URL = ''

type DataType = {
   email: string
   pass: string
}

// Login user
const login = async (userData: DataType) => {
   const response = await axios.post(API_URL + 'login', userData)

   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
   }

   return response.data
}

const authService = {
   login,
}

export default authService
