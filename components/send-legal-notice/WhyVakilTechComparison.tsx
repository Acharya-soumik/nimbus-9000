import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  vakiltech: string | boolean;
  lawyer: string | boolean;
  diy: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Cost",
    vakiltech: "₹1,499 Flat Fee",
    lawyer: "₹5,000 - ₹15,000+",
    diy: "Free (High Risk)",
  },
  {
    feature: "Time Taken",
    vakiltech: "24-48 Hours",
    lawyer: "3-7 Days",
    diy: "Varies",
  },
  {
    feature: "Expert Drafting",
    vakiltech: true,
    lawyer: true,
    diy: false,
  },
  {
    feature: "Review & Edits",
    vakiltech: "Unlimited",
    lawyer: "Charged Extra",
    diy: false,
  },
  {
    feature: "Registered Post",
    vakiltech: true,
    lawyer: "Extra Charges",
    diy: "Manual Effort",
  },
  {
    feature: "Customer Support",
    vakiltech: "24/7 Online",
    lawyer: "Limited Availability",
    diy: false,
  },
];

export function WhyVakilTechComparison({ className }: { className?: string }) {
  const renderCell = (value: string | boolean) => {
    if (value === true) return <Check className="w-5 h-5 text-success mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-error-light mx-auto" />;
    return <span className="font-medium">{value}</span>;
  };

  return (
    <section className={cn("py-12 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-3">
            Why Choose VakilTech?
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto">
            We combine the expertise of top lawyers with the convenience of technology.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-500 w-1/4">Features</th>
                <th className="px-6 py-4 font-bold text-primary bg-primary/5 w-1/4 text-center text-base">
                  VakilTech
                </th>
                <th className="px-6 py-4 font-semibold text-gray-500 w-1/4 text-center">
                  Local Lawyer
                </th>
                <th className="px-6 py-4 font-semibold text-gray-500 w-1/4 text-center">
                  DIY Template
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-text-heading bg-white">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center bg-primary/5 text-text-heading border-x border-primary/10">
                    {renderCell(row.vakiltech)}
                  </td>
                  <td className="px-6 py-4 text-center text-text-medium bg-white">
                    {renderCell(row.lawyer)}
                  </td>
                  <td className="px-6 py-4 text-center text-text-medium bg-white">
                    {renderCell(row.diy)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
