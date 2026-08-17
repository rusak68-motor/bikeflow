"use client";
import { useState } from "react";
import { Wrench } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import KlantCard, { Klant } from "@/components/KlantCard";
import FietsCard, { Fiets } from "@/components/FietsCard";
import WerkzaamhedenCard, { WorkItem } from "@/components/WerkzaamhedenCard";
import OnderdelenCard, { PartItem } from "@/components/OnderdelenCard";
import OpmerkingCard from "@/components/OpmerkingCard";
import PricingSummary from "@/components/PricingSummary";
import QuickActionsBar from "@/components/QuickActionsBar";

const klant: Klant = {
  name: "Ivan Petrov",
  isVasteKlant: true,
  phone: "+31 6 12345678",
  email: "ivan.petrov@email.com",
  location: "Rotterdam, Nederland",
};

const fiets: Fiets = {
  merk: "TREK",
  type: "Mountainbike",
  model: "Marlin 7",
  frameMaat: 'M (17.5")',
  jaar: "2022",
  kilometerstand: "1.250 km",
};

export default function NieuweReparatiePage() {
  const [werkzaamheden, setWerkzaamheden] = useState<WorkItem[]>([
    { id: 1, description: "Diagnose", price: 15, minutes: 15 },
    { id: 2, description: "Versnellingen afstellen", price: 25, minutes: 30 },
    { id: 3, description: "Remmen afstellen", price: 20, minutes: 20 },
    { id: 4, description: "Ketting smeren", price: 10, minutes: 10 },
  ]);

  const [onderdelen, setOnderdelen] = useState<PartItem[]>([
    { id: 1, description: "Shimano HG54 Ketting", quantity: 1, price: 25 },
    { id: 2, description: "Remblokken", quantity: 1, price: 15 },
    { id: 3, description: "Versnellingskabel", quantity: 1, price: 5 },
    { id: 4, description: "Ketting smeermiddel", quantity: 1, price: 6 },
  ]);

  const [opmerking, setOpmerking] = useState(
    "De klant klaagt over geluid bij het schakelen. Controleer de staat van de ketting en tandwielen."
  );
  const [korting, setKorting] = useState(0);

  const arbeid = werkzaamheden.reduce((sum, item) => sum + item.price, 0);
  const onderdelenTotaal = onderdelen.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <PageHeader
          icon={<Wrench className="w-5 h-5 text-white" strokeWidth={2.4} />}
          title="Nieuwe reparatie"
          subtitle="Maak een nieuwe reparatie aan"
        />

        <div className="p-4 md:p-8 space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <KlantCard klant={klant} />
            <FietsCard fiets={fiets} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <WerkzaamhedenCard items={werkzaamheden} onChange={setWerkzaamheden} />
            <OnderdelenCard items={onderdelen} onChange={setOnderdelen} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            <OpmerkingCard value={opmerking} onChange={setOpmerking} />
            <PricingSummary
              arbeid={arbeid}
              onderdelen={onderdelenTotaal}
              korting={korting}
              onKortingChange={setKorting}
              onPrint={() => window.print()}
              onSave={() => alert("Reparatie opgeslagen (demo)")}
              onReset={() => {
                setWerkzaamheden([]);
                setOnderdelen([]);
                setOpmerking("");
                setKorting(0);
              }}
            />
          </div>

          <QuickActionsBar />
        </div>
      </div>
    </main>
  );
}
