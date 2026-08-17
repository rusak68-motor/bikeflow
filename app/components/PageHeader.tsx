"use client";
import { ReactNode } from "react";
import { Search, HelpCircle, Sun } from "lucide-react";
import RequestsBell from "@/components/RequestsBell";

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function PageHeader({
  icon,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 md:py-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-green-600 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="min-w-0">
            <h1 className="text-lg md:text-2xl font-bold text-slate-900 leading-tight truncate">
              {title}
            </h1>
            <p className="text-xs md:text-sm text-slate-500 truncate">{subtitle}</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Zoek klant, fiets, factuur..."
              className="w-full border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-green-500/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <RequestsBell />
          <button className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-50">
            <HelpCircle className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-slate-600" />
          </button>
          <button className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-50">
            <Sun className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-slate-600" />
          </button>
        </div>
      </div>

      {/* Поиск отдельной строкой на мобильных */}
      <div className="md:hidden relative mt-3">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Zoek klant, fiets, factuur..."
          className="w-full border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-green-500/40"
        />
      </div>
    </header>
  );
}
