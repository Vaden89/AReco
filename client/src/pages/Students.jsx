import { Search } from "lucide-react";

export default function StudentPage() {
  return (
    <div className="w-full flex flex-col sm:px-20 p-5 ">
      <div className="w-full flex justify-between">
        <h1>Schools</h1>
        <div className="sm:w-[300px] h-10 bg-gray-200 rounded-xl flex items-center px-2">
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
