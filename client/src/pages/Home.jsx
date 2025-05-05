"use client";
import { useAuth } from "../contexts/AuthProvider";
import { StudentInfo } from "../components/home/StudentInfo";
import { EditStudentDetails } from "../components/home/EditStudentDetails";
import { SchoolInfo } from "../components/home/SchoolInfo";
import { EditSchoolDetails } from "../components/home/EditSchoolDetails";
import { InfoCards } from "../components/home/InfoCards";
import { UserImage } from "../components/home/UserImage";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <>
      <InfoCards />
      <div className="w-full flex flex-col sm:flex-row-reverse sm:mt-5 gap-4 p-5 sm:px-20">
        <UserImage />
        {user.role === "student" ? (
          <>
            <StudentInfo />
            <EditStudentDetails className="sm:hidden" />
          </>
        ) : (
          <>
            <SchoolInfo />
            <EditSchoolDetails className="sm:hidden" />
          </>
        )}
      </div>
    </>
  );
}
