import { CheckSquare, Users, FileText, TrendingUp } from "lucide-react";
import { QuickActionCard } from "@/components/quick-action-card";
import { DashboardStatCard } from "@/components/dashboard-stat-card";
import { DocumentList } from "@/components/document-list";
import toast from "react-hot-toast";

export default function FacultyDashboard() {
  const stats = [
    {
      title: "Pending Reviews",
      value: 12,
      icon: CheckSquare,
      description: "Require your attention",
      trend: { value: 8, isPositive: false },
    },
    {
      title: "Active Students",
      value: 85,
      icon: Users,
      description: "Across all classes",
    },
    {
      title: "Reviewed This Week",
      value: 24,
      icon: FileText,
      trend: { value: 15, isPositive: true },
    },
  ];

  const documentsToReview = [
    {
      id: "1",
      name: "Sarah_Johnson_Thesis.pdf",
      type: "Thesis",
      uploadedAt: "1 hour ago",
      status: "pending" as const,
      size: "5.2 MB",
    },
    {
      id: "2",
      name: "Mike_Chen_Assignment2.docx",
      type: "Assignment",
      uploadedAt: "3 hours ago",
      status: "in_review" as const,
      size: "1.5 MB",
    },
    {
      id: "3",
      name: "Emma_Davis_Lab_Report.pdf",
      type: "Lab Report",
      uploadedAt: "5 hours ago",
      status: "pending" as const,
      size: "2.8 MB",
    },
    {
      id: "4",
      name: "Alex_Kumar_Project.pdf",
      type: "Project",
      uploadedAt: "1 day ago",
      status: "approved" as const,
      size: "4.1 MB",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Faculty Dashboard</h1>
        <p className="text-muted-foreground">
          Manage student submissions and track your review progress.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <QuickActionCard
          title="Review Documents"
          description="Start reviewing pending student submissions"
          icon={CheckSquare}
          buttonText="Start Review"
          onClick={() => toast("Opening review interface")}
        />
        <QuickActionCard
          title="View Classes"
          description="Manage your classes and student rosters"
          icon={Users}
          buttonText="View Classes"
          onClick={() => toast("Navigating to classes page")}
        />
      </div>

      <DocumentList
        documents={documentsToReview}
        title="Documents Awaiting Review"
      />
    </div>
  );
}
