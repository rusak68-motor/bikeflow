import { Clock } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

export default function GeschiedenisPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<Clock className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Reparatiegeschiedenis"
          subtitle="Alle eerder uitgevoerde reparaties"
        />
        <div className="p-4 md:p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-slate-500">
            Reparatiegeschiedenis komt hier binnenkort beschikbaar.
          </div>
        </div>
      </div>
    </main>
  );
}
