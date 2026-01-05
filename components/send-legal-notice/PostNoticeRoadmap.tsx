"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PostNoticeRoadmapProps {
  data?: {
    title: string;
    scenarios: Array<{
      situation: string;
      actions: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
  className?: string;
}

export function PostNoticeRoadmap({ data, className }: PostNoticeRoadmapProps) {
  if (!data) return null;

  return (
    <section className={cn("bg-white py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Clear next steps based on how the other party responds
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {data.scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex w-full max-w-md flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 inline-flex self-start items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-700">
                {scenario.situation}
              </div>
              <div className="space-y-6 flex-1">
                {scenario.actions.map((action, actionIndex) => (
                  <div
                    key={actionIndex}
                    className="group relative pl-4 border-l-2 border-primary/10 hover:border-primary transition-colors"
                  >
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {action.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
