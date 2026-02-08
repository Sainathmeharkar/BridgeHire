import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Access the Global State
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Job Portal</h1>
      
      {user ? (
        // IF LOGGED IN: Show User Name & Logout Button
        <div className="text-center">
          <h2 className="text-2xl text-green-600 mb-4">Welcome back, {user.name}!</h2>
          <p className="text-gray-600 mb-6">Role: {user.role}</p>
          <button 
            onClick={() => {
                logout();
                navigate('/login');
            }}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        // IF NOT LOGGED IN: Show Login/Register Buttons
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;