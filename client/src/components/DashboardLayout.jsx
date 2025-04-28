import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const DashboardLayout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />

      <Outlet />
    </div>
  );
};
