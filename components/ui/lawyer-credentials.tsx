import { cn } from "@/lib/utils";
import { ShieldCheck, Scale, FileCheck, Award } from "lucide-react";
import { Badge } from "./badge";

interface LawyerCredentialsProps {
  className?: string;
}

export function LawyerCredentials({ className }: LawyerCredentialsProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-2 text-sm text-text-medium font-medium">
        <Scale className="w-4 h-4 text-primary" />
        <span>Drafted by Advocates with 10+ Years Experience</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <ShieldCheck className="w-3 h-3 mr-1" /> Bar Council Certified
        </Badge>
        <Badge variant="secondary" className="bg-success-light text-success-dark border-success/20 hover:bg-success-light/80">
          <Award className="w-3 h-3 mr-1" /> Expert Reviewed
        </Badge>
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
          <FileCheck className="w-3 h-3 mr-1" /> Legally Valid
        </Badge>
      </div>
    </div>
  );
}
