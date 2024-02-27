import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useSignUp from "./useSignUp";

function SignUpForm() {
  const { signUp, isPending } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const handleSignUp = ({ userName, email, password }) => {
    signUp(
      { userName, email, password },

      // Reset the fields
      { onSettled: reset },
    );
  };

  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col items-center"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <Input
        name="userName"
        label="Name"
        register={register}
        error={errors?.userName}
        required={true}
        type="text"
        validationSchema={{ required: "Name is required" }}
        disabled={isPending}
      />

      <Input
        name="email"
        label="Email"
        register={register}
        error={errors?.email}
        required={true}
        type="email"
        validationSchema={{
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        }}
        disabled={isPending}
      />

      <Input
        name="password"
        label="Password"
        register={register}
        error={errors?.password}
        required={true}
        type="password"
        validationSchema={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        disabled={isPending}
      />

      <Input
        name="passwordConfirm"
        label="Confirm Password"
        register={register}
        error={errors?.passwordConfirm}
        required={true}
        type="password"
        validationSchema={{
          required: "Password confirmation is required",
          validate: (value) =>
            value === getValues().password || "The passwords need to match",
        }}
        disabled={isPending}
      />

      <Button className="mt-5 w-full" type="submit" disabled={isPending}>
        {`${isPending ? "..." : "Sign Up"}`}
      </Button>
    </form>
  );
}

export default SignUpForm;
