"use client";
import { useState } from "react";
import { Button } from "../Button";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { AuthService } from "../../services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";

const studentRegistrationSchema = yup.object({
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
    ),
});

export const StudentForm = ({ back }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(studentRegistrationSchema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = await AuthService.registerStudent(formData);
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <button onClick={back} className="w-fit flex items-center gap-2">
        <ArrowLeft />
        <span className="text-lg">Back</span>
      </button>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="firstName">Firstname</label>
        <input
          id="firstName"
          className="form-input"
          placeholder="Enter your first name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm px-1">
            {errors.firstName.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="lastName">Lastname</label>
        <input
          id="lastName"
          className="form-input"
          placeholder="Enter your last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm px-1">
            {errors.lastName.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
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
          className="form-input"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm px-1">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        loading={loading}
        className="py-1.5 w-full bg-primary text-white rounded-xl mt-4"
      >
        Create Account
      </Button>
    </form>
  );
};
