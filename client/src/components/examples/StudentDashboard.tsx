import StudentDashboard from "@/pages/student-dashboard";
import { Toaster } from "react-hot-toast";

export default function StudentDashboardExample() {
  return (
    <>
      <div className="p-8 max-w-7xl">
        <StudentDashboard />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
