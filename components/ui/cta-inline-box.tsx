import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Use for soft CTAs within content
 * Non-intrusive conversion nudges
 */
export function CTAInlineBox({
  title,
  description,
  ctaText,
  ctaHref,
  icon,
  className,
}: {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("my-8 p-6 border-l-4 border-primary bg-primary/5 rounded", className)}>
      <div className="flex items-start gap-4">
        {icon && <div className="text-primary mt-1">{icon}</div>}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <Link
            href={ctaHref}
            className="text-primary hover:underline font-medium text-sm inline-flex items-center"
          >
            {ctaText} 
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
