"use client";
import { Building2, User } from "lucide-react";
import { useState } from "react";
import { StudentForm } from "./StudentForm";
import { SchoolForm } from "./SchoolForm";

export const Signup = () => {
  const [step, setStep] = useState("selection");

  return (
    <div className="w-full  flex flex-col my-5">
      {step === "selection" ? (
        <AuthFlowSelection setStep={setStep} />
      ) : step === "student" ? (
        <StudentForm back={() => setStep("selection")} />
      ) : (
        <SchoolForm back={() => setStep("selection")} />
      )}
    </div>
  );
};

const AuthFlowSelection = ({ setStep }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>Are you a student or school?</div>
      {/* I'm not sure which colorway to go for*/}
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div
          onClick={() => setStep("school")}
          className="w-full 2xl:h-56 h-40 border-primary border-2 rounded-xl flex flex-col items-center justify-center text-primary text-2xl cursor-pointer hover:scale-95 transition-scale duration-150 ease-in"
        >
          <Building2 size={40} />
          <span>School</span>
        </div>
        <div
          onClick={() => setStep("student")}
          className="w-full 2xl:h-56 h-40 bg-primary rounded-xl flex flex-col items-center justify-center text-white text-2xl  cursor-pointer hover:scale-95 transition-scale duration-150 ease-in"
        >
          <User size={40} />
          <span>Student</span>
        </div>
      </div>
    </div>
  );
};
