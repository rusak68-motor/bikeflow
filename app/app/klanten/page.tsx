import { User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import CustomerSelector from "@/components/CustomerSelector";

export default function KlantenPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<User className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Klanten"
          subtitle="Overzicht van alle klanten"
        />
        <div className="p-4 md:p-8">
          <CustomerSelector />
        </div>
      </div>
    </main>
  );
}
