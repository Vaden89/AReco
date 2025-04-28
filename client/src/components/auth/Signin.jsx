"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

export const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full flex flex-col my-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm px-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm px-1">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-white rounded-xl mt-4"
        >
          Login
        </Button>
      </form>
    </div>
  );
};
