"use client";
interface InvoiceSummaryProps {
  labour: number;
  parts: number;
}
export default function InvoiceSummary({ labour, parts }: InvoiceSummaryProps) {
  const subtotal = labour + parts;
  const btw = subtotal * 0.21;
  const total = subtotal + btw;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Factuur overzicht</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Werkzaamheden</span>
          <span>€ {labour.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Onderdelen</span>
          <span>€ {parts.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotaal</span>
          <span>€ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>BTW (21%)</span>
          <span>€ {btw.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between text-3xl font-bold text-green-700">
          <span>Totaal</span>
          <span>€ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
