"use client";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SHOP_ID } from "@/lib/shopConfig";
import { Bell, X, Check } from "lucide-react";

interface RepairRequest {
  id: string;
  name: string;
  phone?: string;
  description: string;
  status: "new" | "seen" | "done";
  createdAt?: { toDate: () => Date } | null;
}

export default function RequestsBell() {
  const [requests, setRequests] = useState<RepairRequest[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "requests"),
      where("shopId", "==", SHOP_ID),
      where("status", "in", ["new", "seen"]),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(
      q,
      (snap) => {
        setRequests(
          snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }))
        );
      },
      (err) => console.error(err)
    );
    return () => unsub();
  }, []);

  const newCount = requests.filter((r) => r.status === "new").length;

  const markSeen = async (id: string) => {
    await updateDoc(doc(db, "requests", id), { status: "seen" });
  };
  const markDone = async (id: string) => {
    await updateDoc(doc(db, "requests", id), { status: "done" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`relative w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center ${
          newCount > 0
            ? "border-red-300 bg-red-50 animate-pulse"
            : "border-slate-200 hover:bg-slate-50"
        }`}
      >
        <Bell
          className={`w-[16px] h-[16px] md:w-[18px] md:h-[18px] ${
            newCount > 0 ? "text-red-500" : "text-slate-600"
          }`}
        />
        {newCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {newCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 max-w-[90vw] bg-white rounded-2xl shadow-lg border border-slate-200 z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <span className="font-semibold text-sm text-slate-800">
              Aanvragen van klanten
            </span>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
            {requests.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-8">
                Geen nieuwe aanvragen.
              </p>
            )}
            {requests.map((r) => (
              <div
                key={r.id}
                className="p-4"
                onMouseEnter={() => r.status === "new" && markSeen(r.id)}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-slate-800">
                    {r.name || "Klant"}
                  </span>
                  {r.status === "new" && (
                    <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      NIEUW
                    </span>
                  )}
                </div>
                {r.phone && (
                  <p className="text-xs text-slate-400 mb-1">{r.phone}</p>
                )}
                <p className="text-sm text-slate-600 mb-3">{r.description}</p>
                <button
                  onClick={() => markDone(r.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-100 rounded-lg px-3 py-1.5"
                >
                  <Check className="w-3.5 h-3.5" /> Afgehandeld
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
