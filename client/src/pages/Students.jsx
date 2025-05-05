"use client";
import { Plus, Search, UserRound } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import { AddStudent } from "../components/students/AddStudent";
import { useNavigate } from "react-router";

export default function StudentPage() {
  const [searchField, setSearchField] = useState("");
  const arr = [
    {
      profileImg: null,
      firstName: "Isaac",
      lastName: "Shosanya",
      email: "isaacshosanya89@gmail.com",
      id: "98765Zxcvbn",
      dob: "05-22-1998",
    },
    {
      profileImg: null,
      firstName: "David",
      lastName: "Omale",
      email: "davidomale@gmail.com",
      id: "143345rasjk",
      dob: "11-03-2000",
    },
    {
      profileImg: null,
      firstName: "Daniel",
      lastName: "Skippy",
      email: "dantheman@gmail.com",
      id: "54321Qwerty",
      dob: "08-15-1995",
    },
    {
      profileImg: null,
      firstName: "Sarah",
      lastName: "Adeshina",
      email: "sarahade@gmail.com",
      id: "67890Asdfgh",
      dob: "03-30-1999",
    },
    {
      profileImg: null,
      firstName: "Finn",
      lastName: "Omotunde",
      email: "finn@gmail.com",
      id: "13579Yuiop",
      dob: "07-12-2002",
    },
  ];

  //Convert this to debounce search from backend when it's ready
  let filteredData = arr.filter(({ firstName, lastName }) => {
    const name = firstName + " " + lastName;
    return name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="w-full p-5 sm:px-20">
      <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Students</h1>
          <AddStudent className="sm:hidden" />
        </div>

        <div className=" flex items-center gap-4">
          <div className="flex h-10 w-full items-center rounded-xl bg-gray-200 px-2 sm:w-[300px]">
            <input
              className="h-full w-full border-none bg-transparent outline-none"
              type="search"
              placeholder="e.g., Isaac Shosanya"
              name="search"
              id="search"
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Search size={20} className="text-gray-500" />
          </div>
          <AddStudent className="hidden sm:flex" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10">
        {filteredData.map((item, index) => {
          return <StudentCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

const StudentCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dashboard/students/${data.id}`)}
      className="w-full h-[300px] border border-primary rounded-xl flex flex-col gap-4 p-5 hover:shadow-md cursor-pointer"
    >
      <div className="w-1/3 rounded-lg aspect-square bg-gray-300 text-gray-500 flex flex-col justify-center items-center">
        <UserRound size={32} />
      </div>
      <div className="flex flex-col gap-2 text-primary font-medium">
        <span>Name: {data.firstName + " " + data.lastName}</span>
        <span className="truncate">Email: {data.email}</span>
        <span>Student ID: {maskString(data.id)}</span>
        <span>DOB: {data.dob}</span>
      </div>
    </div>
  );
};

function maskString(str) {
  return str.slice(0, 5) + "*".repeat(str.length - 5);
}
