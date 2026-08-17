"use client";
import { User, Bike, Wrench, Settings, FileText } from "lucide-react";

const actions = [
  { label: "Klant kiezen", icon: User },
  { label: "Fiets kiezen", icon: Bike },
  { label: "Werkzaamheid toevoegen", icon: Wrench },
  { label: "Onderdeel toevoegen", icon: Settings },
  { label: "Offerte opslaan", icon: FileText },
];

export default function QuickActionsBar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-wrap items-center gap-4">
      <span className="text-sm font-semibold text-slate-800 shrink-0">
        Snelle acties:
      </span>
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <Icon className="w-4 h-4" />
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
