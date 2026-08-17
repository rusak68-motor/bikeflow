"use client";
import { MessageSquare } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function OpmerkingCard({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-full">
      <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg mb-4">
        <MessageSquare className="w-5 h-5" />
        <span>Opmerking</span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Voeg een opmerking toe..."
        className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 resize-none"
      />
    </div>
  );
}
