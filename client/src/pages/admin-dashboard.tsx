import { Users, FileText, Activity, TrendingUp } from "lucide-react";
import { QuickActionCard } from "@/components/quick-action-card";
import { DashboardStatCard } from "@/components/dashboard-stat-card";
import { DocumentList } from "@/components/document-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: 1248,
      icon: Users,
      description: "Students & Faculty",
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Documents",
      value: 5420,
      icon: FileText,
      description: "Total in system",
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Active Today",
      value: 342,
      icon: Activity,
      description: "User sessions",
    },
    {
      title: "System Health",
      value: "98%",
      icon: TrendingUp,
      description: "Uptime this month",
    },
  ];

  const recentActivity = [
    {
      id: "1",
      name: "System_Backup_Nov.zip",
      type: "Backup",
      uploadedAt: "30 mins ago",
      status: "approved" as const,
      size: "250 MB",
    },
    {
      id: "2",
      name: "User_Report_Q4.pdf",
      type: "Report",
      uploadedAt: "2 hours ago",
      status: "approved" as const,
      size: "1.2 MB",
    },
    {
      id: "3",
      name: "Security_Audit_2024.pdf",
      type: "Audit",
      uploadedAt: "1 day ago",
      status: "in_review" as const,
      size: "3.5 MB",
    },
  ];

  const activityLog = [
    { user: "Sarah Johnson", action: "Uploaded document", time: "5 mins ago" },
    { user: "Dr. Smith", action: "Approved submission", time: "12 mins ago" },
    { user: "Mike Chen", action: "Created account", time: "1 hour ago" },
    { user: "Admin User", action: "Updated settings", time: "2 hours ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor system activity and manage university-wide operations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <QuickActionCard
          title="User Management"
          description="Add, edit, or remove users and manage permissions"
          icon={Users}
          buttonText="Manage Users"
          onClick={() => toast("Opening user management")}
        />
        <QuickActionCard
          title="System Settings"
          description="Configure system-wide settings and preferences"
          icon={Activity}
          buttonText="Open Settings"
          onClick={() => toast("Opening system settings")}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <DocumentList documents={recentActivity} title="Recent System Activity" />

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityLog.map((log, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-0"
                  data-testid={`activity-${index}`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {log.user.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{log.user}</p>
                    <p className="text-sm text-muted-foreground">{log.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
