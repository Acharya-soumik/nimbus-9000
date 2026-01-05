import { Link, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

export function StrengthCalculatorPromo() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Animated Score
  const scoreSpring = useSpring(0, { duration: 2000, bounce: 0 });
  const scoreDisplay = useTransform(scoreSpring, (latest) => Math.round(latest));
  
  React.useEffect(() => {
    if (isInView) {
      scoreSpring.set(85);
    }
  }, [isInView, scoreSpring]);

  // Circle Progress
  const circumference = 365;
  const strokeDashoffset = useTransform(scoreSpring, [0, 85], [circumference, circumference - (85 / 100) * circumference]);

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFF5F2] to-[#FFF9E6] px-6 py-12 shadow-2xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-20 ring-1 ring-black/5"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-warning/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-3xl"></div>

          <div className="relative z-10 lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary-dark shadow-sm ring-1 ring-primary/20 mb-6"
            >
              <ShieldCheck className="mr-2 h-4 w-4 text-primary animate-pulse" />
              Lawyer-logic based
            </motion.div>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Before You Spend ₹1,499 — <span className="text-primary block mt-2">Check If Your Case Is Worth It</span>
            </h2>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.4 }}
               className="mt-6 p-4 rounded-xl bg-amber-50/50 border border-amber-100/50"
            >
                <div className="flex gap-3">
                    <span className="text-xl">⚠️</span>
                    <p className="text-base text-gray-700 font-medium">
                        Many legal notices fail due to weak facts or missing proof.
                        Our lawyer-logic tool helps you avoid wasting money.
                    </p>
                </div>
            </motion.div>

            <div className="mt-8 flex flex-col gap-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/legal-notice-strength"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-coral px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-200"
              >
                See If My Legal Notice Will Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-success" /> Free</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-success" /> 2 minutes</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-success" /> Lawyer-logic based</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 lg:mt-0 lg:w-5/12 ml-auto">
            {/* Calculator Visual */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: -2 } : {}}
                className="relative rounded-2xl bg-white/40 p-3 ring-1 ring-white/60 backdrop-blur-md shadow-xl"
            >
                <div className="rounded-xl bg-white p-8 border border-gray-100 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-success/5 rounded-bl-full -mr-8 -mt-8"></div>
                    
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 relative">
                        <div className="h-3 w-24 rounded-full bg-gray-200"></div>
                        <div className="px-3 py-1 rounded-full bg-success/10 text-xs text-success-dark flex items-center justify-center font-bold tracking-wide uppercase shadow-sm ring-1 ring-success/20">
                            Strong Case
                        </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                           <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-3/4 rounded-full bg-primary/60"></div>
                           </div>
                        </div>
                         <div className="flex items-center gap-3">
                           <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-1/2 rounded-full bg-primary/30"></div>
                           </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center py-2">
                        <div className="relative flex items-center justify-center">
                            {/* SVG Circle */}
                            <svg className="h-40 w-40 transform -rotate-90">
                              <circle
                                cx="80"
                                cy="80"
                                r="58"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-100"
                              />
                              <motion.circle
                                cx="80"
                                cy="80"
                                r="58"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={circumference}
                                style={{ strokeDashoffset }}
                                strokeLinecap="round"
                                className="text-primary drop-shadow-md"
                              />
                            </svg>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-baseline">
                                    <motion.span>{scoreDisplay}</motion.span>%
                                </span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Success Rate</span>
                            </div>
                        </div>
                    </div>
                     <p className="text-center text-xs text-gray-400 mt-4 italic">
                        "Example result for a money recovery dispute with written proof"
                     </p>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
