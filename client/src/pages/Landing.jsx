import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-6xl font-bold mb-10">
        TaskForge 🚀
      </h1>

      <div className="flex gap-5">

        <button
          onClick={() => navigate('/login')}
          className="bg-purple-600 px-8 py-4 rounded-xl"
        >
          Login
        </button>

        <button
          onClick={() => navigate('/signup')}
          className="bg-pink-600 px-8 py-4 rounded-xl"
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default Landing;