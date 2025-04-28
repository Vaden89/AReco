import { EditStudentDetails } from "./EditStudentDetails";

export const StudentInfo = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">First name</span>
        <span>Isaac</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Last name</span>
        <span>Shosanya</span>
      </div>
      <div className="w-full flex flex-col">
        <span className="text-primary font-medium text-sm">Email address</span>
        <span className="truncate">isaacshosanya89@gmail.com</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Student ID</span>
        <span>112344***</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Home address</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Phone No</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">LGA</span>
        <span className="truncate">Shagamu</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">
          State of origin
        </span>
        <span>Ogun State</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">DOB</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Nationality</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Current school</span>
        <span className="truncate">UC Berkley</span>
      </div>
      <EditStudentDetails className="hidden sm:flex" />
    </div>
  );
};
