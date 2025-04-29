import { Search } from "lucide-react";

export default function StudentPage() {
  return (
    <div className="w-full flex flex-col sm:px-20 p-5 ">
      <div className="w-full flex sm:flex-row flex-col justify-between gap-4">
        <h1>Students</h1>
        <div className="sm:w-[300px] w-full h-10 bg-gray-200 rounded-xl flex items-center px-2">
          <input
            style={{
              height: "100%",
              width: "100%",
              border: "none",
              outline: "none",
            }}
            type="search"
            name="search"
            id="search"
          />
          <Search size={20} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
