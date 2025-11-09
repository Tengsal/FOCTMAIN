import { Upload } from "lucide-react";
import { QuickActionCard } from "../quick-action-card";

export default function QuickActionCardExample() {
  return (
    <div className="p-6 max-w-md">
      <QuickActionCard
        title="Upload Document"
        description="Submit assignments, reports, or any academic documents"
        icon={Upload}
        buttonText="Upload Now"
        onClick={() => console.log("Upload clicked")}
      />
    </div>
  );
}
