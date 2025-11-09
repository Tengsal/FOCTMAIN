import { FileText } from "lucide-react";
import { DashboardStatCard } from "../dashboard-stat-card";

export default function DashboardStatCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <DashboardStatCard
        title="Total Documents"
        value={24}
        icon={FileText}
        description="Across all courses"
        trend={{ value: 12, isPositive: true }}
      />
    </div>
  );
}
