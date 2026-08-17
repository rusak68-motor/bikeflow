"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StatusToggle from "@/components/StatusToggle";
import {
  Home,
  Wrench,
  Bike,
  User,
  Package,
  Scissors,
  FileText,
  Clock,
  BarChart3,
  Settings,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Nieuwe reparatie", icon: Wrench, href: "/reparaties" },
  { title: "Fietsen", icon: Bike, href: "/fietsen" },
  { title: "Klanten", icon: User, href: "/klanten" },
  { title: "Onderdelen", icon: Package, href: "/onderdelen" },
  { title: "Werkzaamheden", icon: Scissors, href: "/werkzaamheden" },
  { title: "Facturen", icon: FileText, href: "/facturen" },
  { title: "Reparatiegeschiedenis", icon: Clock, href: "/geschiedenis" },
  { title: "Rapporten", icon: BarChart3, href: "/rapporten" },
  { title: "Instellingen", icon: Settings, href: "/instellingen" },
];

const today = new Date().toLocaleDateString("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
});

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="w-72 min-h-screen bg-[#0B1220] text-white flex flex-col">
      <div className="px-6 py-6 flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center">
          <Bike className="w-6 h-6 text-white" strokeWidth={2.2} />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight">
            Bike<span className="text-green-500">Flow</span>
          </h1>
          <p className="text-[11px] text-slate-400 tracking-wide">
            Werkplaatsbeheer
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 mt-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <StatusToggle />

      <div className="mx-4 mb-4 rounded-2xl bg-white/5 p-4">
        <p className="text-sm font-semibold">Vandaag</p>
        <p className="text-xs text-slate-400 mb-3 capitalize">{today}</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Nieuwe reparaties</span>
            <span className="font-semibold">7</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Voltooid</span>
            <span className="font-semibold">5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Omzet</span>
            <span className="font-semibold">€ 1.245,00</span>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center text-slate-700 font-bold">
          O
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold leading-tight">Oleg</p>
          <p className="text-xs text-slate-400">Monteur</p>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Мобильная верхняя панель с кнопкой-гамбургером */}
      <div className="md:hidden sticky top-0 z-40 bg-[#0B1220] text-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
            <Bike className="w-4 h-4 text-white" strokeWidth={2.2} />
          </div>
          <h1 className="text-lg font-bold">
            Bike<span className="text-green-500">Flow</span>
          </h1>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10"
          aria-label="Menu openen"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Десктопный сайдбар — всегда виден */}
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {/* Мобильное выезжающее меню */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="relative">
            <SidebarContent onNavigate={() => setOpen(false)} />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-[-44px] w-9 h-9 rounded-lg bg-[#0B1220] flex items-center justify-center text-white"
              aria-label="Menu sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}
