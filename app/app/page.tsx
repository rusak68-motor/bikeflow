import { Home } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import DashboardCards from "@/components/DashboardCards";
import RecentRepairs from "@/components/RecentRepairs";

export default function DashboardPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <PageHeader
          icon={<Home className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Dashboard"
          subtitle="Welkom terug bij BikeFlow"
        />
        <div className="p-4 md:p-8">
          <DashboardCards />
          <RecentRepairs />
        </div>
      </div>
    </main>
  );
}
