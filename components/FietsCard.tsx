"use client";
import { Bike, Pencil } from "lucide-react";

export interface Fiets {
  merk: string;
  type: string;
  model: string;
  frameMaat: string;
  jaar: string;
  kilometerstand: string;
}

export default function FietsCard({ fiets }: { fiets: Fiets }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
          <Bike className="w-5 h-5" />
          <span>Fiets</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
          <Pencil className="w-4 h-4 text-slate-600" />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
        <div className="w-full sm:w-32 h-24 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
          <Bike className="w-16 h-16 text-slate-400" strokeWidth={1.3} />
        </div>
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 w-full">
          <div>
            <p className="text-xs text-slate-400">Merk</p>
            <p className="font-semibold text-slate-800">{fiets.merk}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Type</p>
            <p className="font-semibold text-slate-800">{fiets.type}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Model</p>
            <p className="font-semibold text-slate-800">{fiets.model}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Framemaat</p>
            <p className="font-semibold text-slate-800">{fiets.frameMaat}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Jaar</p>
            <p className="font-semibold text-slate-800">{fiets.jaar}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Kilometerstand</p>
            <p className="font-semibold text-slate-800">
              {fiets.kilometerstand}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
