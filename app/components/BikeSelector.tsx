"use client";
import { useState } from "react";
interface Bike {
  id: number;
  brand: string;
  model: string;
  color: string;
  owner: string;
}
const bikes: Bike[] = [
  { id: 1, brand: "Gazelle", model: "Ultimate", color: "Zwart", owner: "Jan de Vries" },
  { id: 2, brand: "Cube", model: "Touring", color: "Blauw", owner: "Peter Jansen" },
  { id: 3, brand: "Batavus", model: "Dinsdag", color: "Grijs", owner: "Lisa Bakker" },
];
export default function BikeSelector() {
  const [search, setSearch] = useState("");
  const filtered = bikes.filter((bike) =>
    `${bike.brand} ${bike.model} ${bike.owner}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Fiets kiezen</h2>
      <input
        type="text"
        placeholder="Zoek fiets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl p-3 mb-5"
      />
      <div className="space-y-3">
        {filtered.map((bike) => (
          <div
            key={bike.id}
            className="border rounded-xl p-4 hover:bg-slate-50 cursor-pointer transition"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">
                  {bike.brand} {bike.model}
                </h3>
                <p className="text-slate-500">Eigenaar: {bike.owner}</p>
              </div>
              <div className="text-slate-400">{bike.color}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-slate-400">Geen fietsen gevonden.</p>
        )}
      </div>
    </div>
  );
}
