import { Link } from "lucide-react";
import * as React from "react";

export function StrengthCalculatorPromo() {
  const [score, setScore] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    
    // Animate score from 0 to 85
    const duration = 2000;
    const steps = 60;
    const increment = 85 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 85) {
        setScore(85);
        clearInterval(timer);
      } else {
        setScore(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible]);

  // Dash array for circle (2 * PI * R) -> 2 * 3.14159 * 58 ≈ 365
  const circumference = 365;
  const strokeDashoffset = isVisible ? circumference - (85 / 100) * circumference : circumference;

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary/20 shadow shadow-black px-6 py-12 shadow-2xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-20">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10 lg:w-1/2">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-primary-coral ring-1 ring-inset ring-primary/20 mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Fast & Accurate AI Analysis
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Will Your Legal Notice Win? <br />
              <span className="text-primary-coral">Get a Score in 2 Mins.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't waste money on weak cases. Our advanced advocate verified algorithm evaluates your chances of success with <strong>95% accuracy</strong> before you spend a rupee on lawyers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/legal-notice-strength"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-coral hover:scale-105 transition-all duration-200"
              >
                Check Free Case Strength
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400 font-medium">
              ⚡ 12,000+ people checked their case strength this month
            </p>
          </div>

          <div className="relative z-10 mt-12 lg:mt-0 lg:w-5/12 ml-auto">
            {/* Calculator Visual */}
            <div className="relative rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm transform transition-transform hover:scale-[1.02] duration-500">
                <div className="rounded-xl bg-[#0f172a]/60 p-8 border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                        <div className="h-3 w-24 rounded-full bg-slate-700/50"></div>
                        <div className="px-3 py-1 rounded-full bg-success/20 text-xs text-success-base flex items-center justify-center font-bold tracking-wide uppercase">Strong Case</div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                           <div className="h-2 w-full rounded-full bg-slate-700/30">
                              <div className="h-2 w-3/4 rounded-full bg-primary/40 animate-pulse"></div>
                           </div>
                        </div>
                         <div className="flex items-center gap-3">
                           <div className="h-2 w-full rounded-full bg-slate-700/30">
                              <div className="h-2 w-1/2 rounded-full bg-primary/20"></div>
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
                                className="text-slate-700/30"
                              />
                              <circle
                                cx="80"
                                cy="80"
                                r="58"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="text-primary transition-all duration-1000 ease-out"
                              />
                            </svg>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-extrabold text-white tracking-tight">{score}%</span>
                                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
