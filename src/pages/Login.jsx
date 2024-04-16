import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
// import CustomNavLink from "../ui/CustomNavLink";

function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Logo size="large" />

      <LoginForm />
    </main>
  );
}

export default Login;
