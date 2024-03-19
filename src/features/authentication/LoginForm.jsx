import { useState } from "react";

import Button from "../../ui/Button";
import useLogin from "./useLogin";
import Loader from "../../ui/Loader";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      },
    );
  };

  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col items-center px-2"
      onSubmit={handleLogin}
    >
      <label
        className="mb-2 me-auto block text-sm font-bold text-textColorLight"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full rounded-lg bg-bgColorLight px-3 py-2 text-textColor transition duration-300 ease-in-out placeholder:text-textColorLight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-textColor"
        type="email"
        id="email"
        autoComplete="email"
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        disabled={isPending}
      />

      <label
        className="mb-2 me-auto block text-sm font-bold text-textColorLight"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="w-full rounded-lg bg-bgColorLight px-3 py-2 text-textColor transition duration-300 ease-in-out placeholder:text-textColorLight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-textColor"
        type="password"
        id="password"
        autoComplete="current-password"
        label="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        disabled={isPending}
      />

      <Button className="mt-5 w-full" disabled={isPending}>
        {isPending ? <Loader size="small" /> : "Log In"}
      </Button>
    </form>
  );
}

export default LoginForm;
