import { FileText } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import InvoiceSummary from "@/components/InvoiceSummary";

export default function FacturenPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<FileText className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Facturen"
          subtitle="Overzicht van alle facturen"
        />
        <div className="p-4 md:p-8">
          <InvoiceSummary labour={85} parts={24.95} />
        </div>
      </div>
    </main>
  );
}
