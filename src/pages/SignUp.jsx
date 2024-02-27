import SignUpForm from "../features/authentication/SignUpForm";

function SignUp() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-bgColorLight">
      <h3 className="mb-10 text-3xl">Sign Up</h3>

      <SignUpForm />
    </main>
  );
}

export default SignUp;
