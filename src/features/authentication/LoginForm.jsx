import { useState } from "react";

import Button from "../../ui/Button";
import useLogin from "./useLogin";
import Loader from "../../ui/Loader";
import Input from "../../ui/Input";

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
      <Input
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isPending}
      />

      <Input
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isPending}
      />

      <Button className="mt-5 w-full" disabled={isPending}>
        {isPending ? <Loader size="small" /> : "Log In"}
      </Button>
    </form>
  );
}

export default LoginForm;
