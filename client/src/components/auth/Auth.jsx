"use client";
import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <section className="w-full lg:w-1/2 h-full justify-center items-start flex flex-col sm:p-20 p-5">
      <h1>{isSignIn ? "Login" : "Create Account"}</h1>
      <p className="text-mygray font-semibold text-sm sm:mt-2">
        Join us and take control of your academic record, make managing and
        securing your documents easier
      </p>
      {isSignIn ? <Signin /> : <Signup />}
      <div className="w-full flex justify-center gap-1 lg:mt-0 mt-2 text-black">
        <span>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
        </span>
        <button
          onClick={() => setIsSignIn((p) => !p)}
          className="font-semibold text-primary"
        >
          {isSignIn ? "Sign up" : "Log in"}
        </button>
      </div>
    </section>
  );
};
