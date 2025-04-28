import { MoveUpRight, School } from "lucide-react";

export default function SchoolsPage() {
  const dummyData = [
    {
      name: "Radiance High School",
      type: "Secondary",
      address: "Goodness omowumi avenue, mile 12, Lagos",
    },
    {
      name: "American International Highschool",
      type: "Secondary",
      address: "28, David awolowo Avenue, Lekki, Lagos",
    },
    {
      name: "Higher Heights",
      type: "Primary",
      address: "12 Mama J Bustop, Ago bridge, Lagos",
    },
  ];
  const currentSchool = {
    name: "UC Berkley",
    type: "Tetitary",
    address: " Pedro okinsawyer street, calafonia, USA",
  };

  return (
    <div className="w-full flex flex-col p-5 sm:px-20 sm:py-10 2xl:p-20 gap-4">
      <div className=" sm:w-fit flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-500">Current School</h2>
        <SchoolCard data={currentSchool} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-500">
          Other Attended Schools
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-8">
          {dummyData.map((item, index) => {
            return <SchoolCard key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

const SchoolCard = ({ data }) => {
  return (
    <div className="w-full h-36 border-primary border rounded-xl p-5 flex gap-4">
      <div className="w-20 sm:w-1/3 h-2/3 sm:h-full bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center shadow-md">
        <School size={28} />
      </div>
      <div className="w-2/3 flex flex-col ">
        <span className="text-lg font-semibold w-full truncate">
          {data.name}
        </span>
        <span className="text-primary">Type: {data.type}</span>
        <span className="text-primary w-full truncate">
          Address: {data.address}
        </span>
        <div className="w-full flex justify-end ">
          <button className="flex text-sm mt-2 text-gray-500 items-center gap-1 ">
            View more
            <MoveUpRight className="mt-1" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
