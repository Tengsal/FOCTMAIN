import { Home, FileText, Users, Settings, BarChart3, Upload, CheckSquare } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Role = "student" | "faculty" | "admin";

interface AppSidebarProps {
  role?: Role;
}

const menuItems = {
  student: [
    {
      title: "Dashboard",
      url: "/student",
      icon: Home,
    },
    {
      title: "My Documents",
      url: "/student/documents",
      icon: FileText,
    },
    {
      title: "Upload",
      url: "/student/upload",
      icon: Upload,
    },
  ],
  faculty: [
    {
      title: "Dashboard",
      url: "/faculty",
      icon: Home,
    },
    {
      title: "Documents to Review",
      url: "/faculty/review",
      icon: CheckSquare,
    },
    {
      title: "My Classes",
      url: "/faculty/classes",
      icon: Users,
    },
    {
      title: "My Documents",
      url: "/faculty/documents",
      icon: FileText,
    },
  ],
  admin: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Home,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Users,
    },
    {
      title: "Documents",
      url: "/admin/documents",
      icon: FileText,
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ role = "student" }: AppSidebarProps) {
  const [location] = useLocation();
  const items = menuItems[role];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FileText className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">UniDMS</span>
            <span className="text-xs text-muted-foreground capitalize">{role}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={isActive ? "bg-sidebar-accent" : ""}
                      data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">john@university.edu</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
