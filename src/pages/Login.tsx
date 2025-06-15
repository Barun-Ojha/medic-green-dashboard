
import { useState } from "react";

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="shadow-lg rounded-xl p-8 bg-white max-w-sm w-full border border-hc-green-light">
        <h2 className="text-2xl font-semibold mb-6 text-hc-green">Doctor Login</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onLogin(username, password);
          }}
        >
          <div className="mb-4">
            <label className="block text-hc-green text-sm mb-1" htmlFor="username">Username</label>
            <input
              className="w-full border border-hc-green-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-hc-green"
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder="doctor username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-hc-green text-sm mb-1" htmlFor="password">Password</label>
            <input
              className="w-full border border-hc-green-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-hc-green"
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-hc-green text-white font-semibold py-2 rounded hover:bg-green-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
