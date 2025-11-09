import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  buttonText?: string;
}

export function QuickActionCard({
  title,
  description,
  icon: Icon,
  onClick,
  buttonText = "Open",
}: QuickActionCardProps) {
  return (
    <Card className="hover-elevate transition-all">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-base" data-testid={`text-${title.toLowerCase().replace(/\s+/g, "-")}`}>{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <Button
              onClick={onClick}
              size="sm"
              data-testid={`button-${buttonText.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
