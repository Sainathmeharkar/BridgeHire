import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student' 
  })

  const { name, email, password, role } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const userData = { name, email, password, role }

    try {
      const response = await axios.post('/api/users', userData)
      if (response.data) {
        alert("Registration Successful! Please Login.")
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
      const message = error.response?.data?.message || "Registration failed"
      alert(message)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-2">Register</h1>
      <p className="text-center text-gray-600 mb-6">Create your account</p>
      
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        
        <input 
          type="text" 
          name="name" 
          value={name} 
          placeholder="Enter your name" 
          onChange={onChange}
          required 
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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

        <select 
            name="role" 
            value={role} 
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
        </select>

        <button 
          type="submit" 
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-200"
        >
          Register
        </button>

      </form>
    </div>
  )
}

export default Register