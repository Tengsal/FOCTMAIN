import AdminDashboard from "@/pages/admin-dashboard";
import { Toaster } from "react-hot-toast";

export default function AdminDashboardExample() {
  return (
    <>
      <div className="p-8 max-w-7xl">
        <AdminDashboard />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
