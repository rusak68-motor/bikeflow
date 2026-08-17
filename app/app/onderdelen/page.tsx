import { Package } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import PartsTable from "@/components/PartsTable";

export default function OnderdelenPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<Package className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Onderdelen"
          subtitle="Voorraad en materialen"
        />
        <div className="p-4 md:p-8">
          <PartsTable />
        </div>
      </div>
    </main>
  );
}
