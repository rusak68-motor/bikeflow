import { Bike } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import BikeSelector from "@/components/BikeSelector";

export default function FietsenPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<Bike className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Fietsen"
          subtitle="Overzicht van alle fietsen"
        />
        <div className="p-4 md:p-8">
          <BikeSelector />
        </div>
      </div>
    </main>
  );
}
