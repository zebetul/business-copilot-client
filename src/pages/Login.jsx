import LoginForm from "../features/authentication/LoginForm";
import CustomNavLink from "../ui/CustomNavLink";

function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-center text-6xl">BUSINESS COPILOT</h1>

      <h2 className="mb-10 text-center text-lg font-bold text-textColorLight">
        Automating business planning with the power of AI
      </h2>

      <h3 className="mb-10 text-3xl">Log in</h3>

      <LoginForm />

      <p className="mt-10 flex items-center gap-2">
        Don`t have an account?
        <CustomNavLink to="/signup" type="primary">
          Sign up
        </CustomNavLink>
      </p>
    </main>
  );
}

export default Login;
