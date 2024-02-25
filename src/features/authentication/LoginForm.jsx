import { useState } from "react";

import Button from "../../ui/Button";
import useLogin from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("sebenicristi@gmail.com");
  const [password, setPassword] = useState("123456");
  const { login, isPending } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation
    if (!email || !password) return;

    // login being a mutation function we can use onSettled to clear the form, which is a property of the useMutation hook
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <form
      className="max-w-sm mx-auto flex flex-col items-center"
      onSubmit={handleLogin}
    >
      <div className="mb-5">
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
          className="shadow appearance-none mb-5 border border-textColorLight rounded w-full py-2 px-3 text-textColorLight bg-bgColor leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="username"
          disabled={isPending}
        />

        <label
          htmlFor="password"
          className="block text-textColorLight text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="shadow appearance-none mb-5 border border-textColorLight rounded w-full py-2 px-3 text-textColorLight bg-bgColor leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="current-password"
          disabled={isPending}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
