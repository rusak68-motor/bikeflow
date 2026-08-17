"use client";
import { User, Phone, Mail, MapPin, Pencil } from "lucide-react";

export interface Klant {
  name: string;
  isVasteKlant: boolean;
  phone: string;
  email: string;
  location: string;
}

export default function KlantCard({ klant }: { klant: Klant }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
          <User className="w-5 h-5" />
          <span>Klant</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
          <Pencil className="w-4 h-4 text-slate-600" />
        </button>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <User className="w-7 h-7 text-green-700" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900">
              {klant.name}
            </span>
            {klant.isVasteKlant && (
              <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Vaste klant
              </span>
            )}
          </div>
          <p className="flex items-center gap-2 text-slate-500 text-sm">
            <Phone className="w-4 h-4" /> {klant.phone}
          </p>
          <p className="flex items-center gap-2 text-slate-500 text-sm">
            <Mail className="w-4 h-4" /> {klant.email}
          </p>
          <p className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" /> {klant.location}
          </p>
        </div>
      </div>
    </div>
  );
}
