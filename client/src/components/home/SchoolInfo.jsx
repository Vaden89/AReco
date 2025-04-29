export const SchoolInfo = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">School name</span>
        <span>American International college</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Type</span>
        <span>Secondary</span>
      </div>
      <div className="w-full flex flex-col">
        <span className="text-primary font-medium text-sm">Email address</span>
        <span className="truncate">americanintschools@gmail.com</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">School ID</span>
        <span>112344***</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Address</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Phone No</span>
        <span>-</span>
      </div>

      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">
          Number of Students
        </span>
        <span>650</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">State</span>
        <span>-</span>
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-medium text-sm">Established In</span>
        <span className="truncate">2006</span>
      </div>
    </div>
  );
};
