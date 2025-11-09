import FacultyDashboard from "@/pages/faculty-dashboard";
import { Toaster } from "react-hot-toast";

export default function FacultyDashboardExample() {
  return (
    <>
      <div className="p-8 max-w-7xl">
        <FacultyDashboard />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
