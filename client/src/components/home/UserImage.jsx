import { UserRound } from "lucide-react";

export const UserImage = () => {
  return (
    <div className="w-full lg:w-[70%] h-[40vh] bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 cursor-pointer">
      <UserRound size={50} />
    </div>
  );
};
