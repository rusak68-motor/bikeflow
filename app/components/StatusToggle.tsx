"use client";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SHOP_ID, SHOP_NAME, SHOP_CITY } from "@/lib/shopConfig";

type Status = "free" | "busy";

export default function StatusToggle() {
  const [status, setStatus] = useState<Status>("free");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const ref = doc(db, "shops", SHOP_ID);
    const unsub = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          if (data.status === "free" || data.status === "busy") {
            setStatus(data.status);
          }
        }
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  const changeStatus = async (next: Status) => {
    setSaving(true);
    try {
      await setDoc(
        doc(db, "shops", SHOP_ID),
        {
          name: SHOP_NAME,
          city: SHOP_CITY,
          status: next,
          visible: true,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setStatus(next);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-4 mb-4 rounded-2xl bg-white/5 p-4">
      <p className="text-sm font-semibold mb-3">Mijn status</p>
      <div className="grid grid-cols-2 gap-2">
        <button
          disabled={saving || loading}
          onClick={() => changeStatus("free")}
          className={`rounded-xl py-3 text-sm font-semibold transition-colors disabled:opacity-50 ${
            status === "free"
              ? "bg-green-600 text-white"
              : "bg-white/10 text-slate-300 hover:bg-white/15"
          }`}
        >
          Vrij
        </button>
        <button
          disabled={saving || loading}
          onClick={() => changeStatus("busy")}
          className={`rounded-xl py-3 text-sm font-semibold transition-colors disabled:opacity-50 ${
            status === "busy"
              ? "bg-red-500 text-white"
              : "bg-white/10 text-slate-300 hover:bg-white/15"
          }`}
        >
          Bezet
        </button>
      </div>
      <p className="text-[11px] text-slate-500 mt-2">
        Klanten in BikeFlow Vind zien dit direct.
      </p>
    </div>
  );
}
