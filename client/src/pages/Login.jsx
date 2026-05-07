import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        https://taskforge-kmt0.onrender.com,
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-zinc-900 p-10 rounded-3xl w-[400px]">

        <h1 className="text-5xl font-bold text-center mb-10 text-purple-400">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-5 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700 mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 p-4 rounded-xl font-bold"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;