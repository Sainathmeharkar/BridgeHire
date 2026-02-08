import { useState, useContext } from 'react' // 1. Import useContext
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext' // 2. Import the Context

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const navigate = useNavigate()
  
  // 3. Get the login function from the "Generator"
  const { login } = useContext(AuthContext) 

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const userData = { email, password }

    try {
      const response = await axios.post('/api/users/login', userData)

      if (response.data) {
        // 4. USE THE CONTEXT FUNCTION
        // We hand the data to AuthProvider, and IT handles localStorage and state
        login(response.data) 
        
        alert("Login Successful!")
        navigate('/') 
      }
    } catch (error) {
      console.error(error)
      const message = error.response?.data?.message || "Login failed"
      alert(message)
    }
  }

  // ... (Return Statement stays exactly the same) ...
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
      <p className="text-center text-gray-600 mb-6">Login to your account</p>
      
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        
        <input 
          type="email" 
          name="email" 
          value={email} 
          placeholder="Enter your email" 
          onChange={onChange}
          required 
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input 
          type="password" 
          name="password" 
          value={password} 
          placeholder="Enter password" 
          onChange={onChange}
          required 
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button 
          type="submit" 
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-200"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login