import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("sebenicristi@gmail.com");
  const [password, setPassword] = useState("1234");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Input validation
    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/assistant", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-bgColorLight text-textColorLight">
      <form
        className="max-w-sm mx-auto flex flex-col items-center"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-textColorLight text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-textColorLight bg-bgColorLight  leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label
            htmlFor="password"
            className="block text-textColorLight text-sm font-bold mb-2 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-textColorLight bg-bgColorLight leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <Button type="submit">Log In</Button>
      </form>
    </main>
  );
}

export default Login;
