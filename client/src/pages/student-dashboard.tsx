import { Upload, FileText, Clock } from "lucide-react";
import { QuickActionCard } from "@/components/quick-action-card";
import { DashboardStatCard } from "@/components/dashboard-stat-card";
import { DocumentList } from "@/components/document-list";
import toast from "react-hot-toast";

export default function StudentDashboard() {
  const stats = [
    {
      title: "Total Documents",
      value: 24,
      icon: FileText,
      description: "Across all courses",
    },
    {
      title: "Pending Review",
      value: 3,
      icon: Clock,
      description: "Awaiting approval",
    },
    {
      title: "Approved",
      value: 21,
      icon: FileText,
      trend: { value: 12, isPositive: true },
    },
  ];

  const recentDocuments = [
    {
      id: "1",
      name: "Assignment_1_Final.pdf",
      type: "Assignment",
      uploadedAt: "2 hours ago",
      status: "in_review" as const,
      size: "2.4 MB",
    },
    {
      id: "2",
      name: "Research_Paper_Draft.docx",
      type: "Research",
      uploadedAt: "1 day ago",
      status: "approved" as const,
      size: "1.8 MB",
    },
    {
      id: "3",
      name: "Lab_Report_3.pdf",
      type: "Lab Report",
      uploadedAt: "3 days ago",
      status: "pending" as const,
      size: "3.2 MB",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your documents today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <QuickActionCard
          title="Upload Document"
          description="Submit assignments, reports, or any academic documents"
          icon={Upload}
          buttonText="Upload Now"
          onClick={() => toast.success("Upload dialog would open here")}
        />
        <QuickActionCard
          title="View All Documents"
          description="Browse and manage all your submitted documents"
          icon={FileText}
          buttonText="View All"
          onClick={() => toast("Navigating to documents page")}
        />
      </div>

      <DocumentList documents={recentDocuments} title="Recent Submissions" />
    </div>
  );
}
