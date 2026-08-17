"use client";
const repairs = [
  { klant: "Jan de Vries", fiets: "Gazelle Ultimate", status: "In behandeling", prijs: "€85" },
  { klant: "Peter Jansen", fiets: "Cube Touring", status: "Klaar", prijs: "€145" },
  { klant: "Lisa Bakker", fiets: "Batavus Dinsdag", status: "Wachten op onderdelen", prijs: "€230" },
];
export default function RecentRepairs() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Laatste reparaties</h2>
      <div className="overflow-x-auto">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Klant</th>
            <th>Fiets</th>
            <th>Status</th>
            <th>Prijs</th>
          </tr>
        </thead>
        <tbody>
          {repairs.map((repair, index) => (
            <tr key={index} className="border-b hover:bg-slate-50">
              <td className="py-4">{repair.klant}</td>
              <td>{repair.fiets}</td>
              <td>{repair.status}</td>
              <td className="font-semibold">{repair.prijs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
