import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

function SignUpForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col items-center"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <Input
        name="name"
        label="Name"
        register={register}
        error={errors?.name}
        required={true}
        type="text"
        validationSchema={{ required: "Name is required" }}
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
      />

      <Button className="mt-5" type="submit" disabled={false}>
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
