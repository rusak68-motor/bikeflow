import { Scissors } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

export default function WerkzaamhedenPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<Scissors className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Werkzaamheden"
          subtitle="Standaard werkzaamheden en tarieven"
        />
        <div className="p-4 md:p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-slate-500">
            Werkzaamhedenlijst komt hier binnenkort beschikbaar.
          </div>
        </div>
      </div>
    </main>
  );
}
