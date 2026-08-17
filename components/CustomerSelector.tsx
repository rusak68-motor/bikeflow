"use client";
import { useState } from "react";
interface Customer {
  id: number;
  name: string;
  phone: string;
}
const customers: Customer[] = [
  { id: 1, name: "Jan de Vries", phone: "06 12345678" },
  { id: 2, name: "Peter Jansen", phone: "06 87654321" },
  { id: 3, name: "Lisa Bakker", phone: "06 99887766" },
];
export default function CustomerSelector() {
  const [search, setSearch] = useState("");
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Klant zoeken</h2>
      <input
        type="text"
        placeholder="Naam van klant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl p-3 mb-5"
      />
      <div className="space-y-3">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="border rounded-xl p-4 hover:bg-slate-50 cursor-pointer transition"
          >
            <h3 className="font-semibold">{customer.name}</h3>
            <p className="text-slate-500">{customer.phone}</p>
          </div>
        ))}
        {filteredCustomers.length === 0 && (
          <p className="text-slate-400">Geen klanten gevonden.</p>
        )}
      </div>
    </div>
  );
}
