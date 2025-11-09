import { DocumentList } from "../document-list";

export default function DocumentListExample() {
  const documents = [
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
  ];

  return (
    <div className="p-6">
      <DocumentList documents={documents} title="Recent Documents" />
    </div>
  );
}
