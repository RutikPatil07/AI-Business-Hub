import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      // redirect
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-xl w-[350px]">

        <h1 className="text-2xl font-bold mb-5 text-center text-blue-500">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 text-black rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-5 text-black rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;