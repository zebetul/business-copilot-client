import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-bgColorLight text-textColor">
      <h1 className="text-6xl text-center">BUSINESS COPILOT</h1>

      <h2 className="mb-20 text-lg text-center font-bold text-textColorLight">
        Automating business planning with the power of AI
      </h2>

      <h3 className="mb-10 text-3xl">Log in to your account</h3>

      <LoginForm />
    </main>
  );
}

export default Login;
