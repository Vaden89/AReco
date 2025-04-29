"use client";
import { UserRoundPlus } from "lucide-react";
import { useAuth } from "../contexts/AuthProvider";
import { StudentInfo } from "../components/home/StudentInfo";
import { EditStudentDetails } from "../components/home/EditStudentDetails";
import { SchoolInfo } from "../components/home/SchoolInfo";

export default function HomePage() {
  const { user } = useAuth();
  const cardData = [
    // {
    //   field: "Currently Attending",
    //   value: "UC Berkley",
    // },
    // {
    //   field: "No. Of Schools Attended",
    //   value: 3,
    // },
    // {
    //   field: "Previous Schools",
    //   value: [
    //     "Queens College, Yaba",
    //     "Corona Secondary School, Agbara",
    //     "Royal Heritage Primary School",
    //   ],
    // },
    {
      field: "School Name",
      value: "American International College",
    },
    {
      field: "Established In",
      value: "1868",
    },
    {
      field: "Total Students",
      value: 20457,
    },
  ];

  return (
    <>
      <div className="w-full h-40 2xl:h-52 hidden sm:grid grid-cols-3 mt-5 px-20 gap-5">
        {cardData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col bg-primary rounded-xl text-white items-center justify-center text-base p-5"
            >
              <span>{item.field}:</span>
              <span className="w-full truncate text-xl text-center">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col sm:flex-row-reverse sm:mt-5 gap-4 p-5 sm:px-20">
        <div className="w-full h-[40vh] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
          <UserRoundPlus size={50} />
        </div>
        {user.role === "student" ? (
          <>
            <StudentInfo />
            <EditStudentDetails className="sm:hidden" />
          </>
        ) : (
          <SchoolInfo />
        )}
      </div>
    </>
  );
}
