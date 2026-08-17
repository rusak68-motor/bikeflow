"use client";
const cards = [
  { title: "Reparaties vandaag", value: "12", icon: "🔧", color: "bg-blue-500" },
  { title: "Klanten", value: "248", icon: "👤", color: "bg-green-500" },
  { title: "Fietsen", value: "96", icon: "🚲", color: "bg-orange-500" },
  { title: "Omzet vandaag", value: "€1.245", icon: "💶", color: "bg-purple-500" },
];
export default function DashboardCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">{card.title}</p>
              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>
            <div
              className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
