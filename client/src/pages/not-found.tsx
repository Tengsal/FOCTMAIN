import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <FileQuestion className="h-24 w-24 mx-auto text-muted-foreground" />
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl text-muted-foreground">Page not found</p>
          <p className="text-sm text-muted-foreground max-w-md">
            The page you're looking for doesn't exist or you don't have permission to access it.
          </p>
        </div>
        <Button asChild data-testid="button-go-home">
          <Link href="/student">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
