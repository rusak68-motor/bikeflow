"use client";
import { Settings, Plus, Minus, Trash2 } from "lucide-react";

export interface PartItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

interface Props {
  items: PartItem[];
  onChange: (items: PartItem[]) => void;
}

export default function OnderdelenCard({ items, onChange }: Props) {
  const addItem = () => {
    onChange([
      ...items,
      { id: Date.now(), description: "", quantity: 1, price: 0 },
    ]);
  };
  const updateItem = (id: number, field: keyof PartItem, value: string | number) => {
    onChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };
  const changeQuantity = (id: number, delta: number) => {
    onChange(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };
  const removeItem = (id: number) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg mb-5">
        <Settings className="w-5 h-5" />
        <span>Onderdelen en materialen</span>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[520px]">
        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-100">
            <th className="pb-3 font-medium">Omschrijving</th>
            <th className="pb-3 font-medium">Aantal</th>
            <th className="pb-3 font-medium">Prijs</th>
            <th className="pb-3 font-medium">Totaal</th>
            <th className="pb-3"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-slate-50">
              <td className="py-3 pr-3">
                <input
                  value={item.description}
                  onChange={(e) =>
                    updateItem(item.id, "description", e.target.value)
                  }
                  placeholder="Beschrijving..."
                  className="w-full bg-transparent focus:outline-none font-medium text-slate-800"
                />
              </td>
              <td className="py-3 pr-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </td>
              <td className="py-3 pr-3 text-slate-600 whitespace-nowrap">
                €{" "}
                <input
                  type="number"
                  step="0.01"
                  value={item.price}
                  onChange={(e) =>
                    updateItem(item.id, "price", parseFloat(e.target.value) || 0)
                  }
                  className="w-16 bg-transparent focus:outline-none"
                />
              </td>
              <td className="py-3 pr-3 font-semibold text-slate-800 whitespace-nowrap">
                € {(item.quantity * item.price).toFixed(2)}
              </td>
              <td className="py-3 text-right">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <button
        onClick={addItem}
        className="mt-4 w-full flex items-center justify-center gap-2 border border-dashed border-slate-300 text-green-700 font-medium text-sm rounded-xl py-3 hover:bg-green-50"
      >
        <Plus className="w-4 h-4" /> Onderdeel toevoegen
      </button>
    </div>
  );
}
