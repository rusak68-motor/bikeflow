"use client";
import { useState } from "react";
interface Part {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
export default function PartsTable() {
  const [parts, setParts] = useState<Part[]>([
    { id: 1, name: "Ketting", quantity: 1, price: 24.95 },
  ]);
  const addPart = () => {
    setParts([...parts, { id: Date.now(), name: "", quantity: 1, price: 0 }]);
  };
  const updateField = (id: number, field: keyof Part, value: string | number) => {
    setParts(parts.map((part) => (part.id === id ? { ...part, [field]: value } : part)));
  };
  const total = parts.reduce((sum, part) => sum + part.quantity * part.price, 0);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Onderdelen</h2>
        <button
          onClick={addPart}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
        >
          + Onderdeel toevoegen
        </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full min-w-[420px]">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Onderdeel</th>
            <th>Aantal</th>
            <th>Prijs</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id} className="border-b">
              <td className="py-3">
                <input
                  value={part.name}
                  onChange={(e) => updateField(part.id, "name", e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={part.quantity}
                  onChange={(e) =>
                    updateField(part.id, "quantity", parseInt(e.target.value) || 0)
                  }
                  className="w-20 border rounded-lg p-2"
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={part.price}
                  onChange={(e) =>
                    updateField(part.id, "price", parseFloat(e.target.value) || 0)
                  }
                  className="w-28 border rounded-lg p-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex justify-end mt-6">
        <h3 className="text-2xl font-bold">Onderdelen totaal: €{total.toFixed(2)}</h3>
      </div>
    </div>
  );
}
