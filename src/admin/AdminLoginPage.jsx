import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-900 border border-white/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-5">
          <Link to="/" className="text-cyan-400">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AdminLoginPage;