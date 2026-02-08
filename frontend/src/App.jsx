import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Routes'
import { AuthProvider } from './context/AuthContext'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>)
}

export default App
