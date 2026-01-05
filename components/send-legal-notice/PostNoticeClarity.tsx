import React from "react";
import { colors } from "@/lib/design-system/theme";
import { motion } from "framer-motion";
import { MessageSquare, ShieldAlert, BadgeCheck } from "lucide-react";

export interface PostNoticeClarityProps {
  className?: string;
}

const scenarios = [
  {
    title: "If the other party replies",
    icon: MessageSquare,
    color: "text-blue-600",
    bg: "bg-blue-50",
    points: [
      "Lawyer reviews the reply",
      "You receive a simple explanation",
      "We guide you on settlement, negotiation, or escalation"
    ]
  },
  {
    title: "If there is no reply",
    icon: ShieldAlert,
    color: "text-amber-600",
    bg: "bg-amber-50",
    points: [
      "Silence is legally documented",
      "Your case becomes stronger",
      "You receive guidance on next steps"
    ]
  },
  {
    title: "If they want to resolve",
    icon: BadgeCheck,
    color: "text-green-600",
    bg: "bg-green-50",
    points: [
      "We assist with settlement or mediation",
      "Often resolves disputes without court",
    ]
  }
];

export const PostNoticeClarity: React.FC<PostNoticeClarityProps> = ({ className = "" }) => {
  return (
    <section className={`relative bg-white py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            What Happens After the Legal Notice Is Sent?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Most people fear what happens after a legal notice is sent.
            <br className="hidden md:block" /> We don’t leave you guessing.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden"
              >
                 <div className={`absolute top-0 right-0 w-32 h-32 ${scenario.bg} rounded-bl-full -mr-16 -mt-16 opacity-50`} />
                 
                <div className={`w-14 h-14 ${scenario.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${scenario.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {scenario.title}
                </h3>

                <ul className="space-y-4">
                  {scenario.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${scenario.color.replace('text-', 'bg-')}`} />
                      <span className="text-gray-600 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-primary">
                You are never left alone after the notice is sent.
            </p>
        </div>

      </div>
    </section>
  );
};
