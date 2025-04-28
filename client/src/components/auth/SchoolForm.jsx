"use client";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../../services/auth.service";

export const SchoolForm = ({ back }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const data = await AuthService.registerSchool(formData);
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <button onClick={back} className="w-fit flex items-center gap-2">
        <ArrowLeft />
        <span className="text-lg">Back</span>
      </button>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name">School name</label>
        <input
          id="name"
          placeholder="Enter your institutes name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm px-1">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="phone">Phone No.</label>
        <input
          id="phone"
          placeholder="Enter your school's phone number"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm px-1">
            {errors.phone.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
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
        <label htmlFor="establishedYear">Established in</label>
        <input
          id="establishedYear"
          placeholder="What year was your school formed"
          {...register("establishedYear", { required: true })}
        />
        {errors.establishedYear && (
          <span className="text-red-500 text-sm px-1">
            {errors.establishedYear.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="type">Type of institute</label>
        <select {...register("type")}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="tertiary">Tertiary</option>
        </select>
        {errors.type && (
          <span className="text-red-500 text-sm px-1">
            {errors.type.message}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
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
