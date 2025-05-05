"use client";
import { useParams } from "react-router";
import { UserImage } from "../components/home/UserImage";
import { StudentInfo } from "../components/home/StudentInfo";
import { AddTranscriptBtn } from "../components/students/AddTranscriptBtn";

export default function IndividualStudentPage() {
  let { studentId } = useParams();

  return (
    <div className="w-full flex flex-col sm:flex-row-reverse gap-4 p-5 sm:px-20 sm:py-10">
      <UserImage />
      <StudentInfo />
      <div className="sm:hidden">
        <AddTranscriptBtn id={studentId} />
      </div>
    </div>
  );
}
