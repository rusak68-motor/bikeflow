"use client";
import { Printer, Save, Trash2 } from "lucide-react";

interface Props {
  arbeid: number;
  onderdelen: number;
  korting: number;
  onKortingChange: (value: number) => void;
  onPrint: () => void;
  onSave: () => void;
  onReset: () => void;
}

export default function PricingSummary({
  arbeid,
  onderdelen,
  korting,
  onKortingChange,
  onPrint,
  onSave,
  onReset,
}: Props) {
  const subtotal = arbeid + onderdelen;
  const kortingBedrag = subtotal * (korting / 100);
  const totaal = subtotal - kortingBedrag;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-full">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Arbeid</span>
            <span className="font-semibold text-slate-800">
              € {arbeid.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Onderdelen en materialen</span>
            <span className="font-semibold text-slate-800">
              € {onderdelen.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Korting</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={korting}
                onChange={(e) => onKortingChange(parseFloat(e.target.value) || 0)}
                className="w-14 border border-slate-200 rounded-lg px-2 py-1 text-right"
              />
              <span className="text-slate-400">%</span>
              <span className="font-semibold text-slate-800 w-16 text-right">
                € {kortingBedrag.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
            <span className="text-lg font-bold text-slate-900">TOTAAL</span>
            <span className="text-2xl font-bold text-green-700">
              € {totaal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-medium">Totaal te betalen</span>
          <span className="text-3xl font-bold text-green-700">
            € {totaal.toFixed(2)}
          </span>
        </div>
        <button
          onClick={onPrint}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2"
        >
          <Printer className="w-4 h-4" /> Factuur afdrukken
        </button>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={onSave}
            className="border border-green-200 bg-white text-green-700 font-medium rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-green-50"
          >
            <Save className="w-4 h-4" /> Opslaan
          </button>
          <button
            onClick={onReset}
            className="border border-red-200 bg-white text-red-500 font-medium rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" /> Wissen
          </button>
        </div>
      </div>
    </>
  );
}
