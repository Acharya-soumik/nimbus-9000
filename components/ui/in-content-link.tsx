import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Use for contextual links within paragraphs
 * Adds subtle styling to differentiate from body text
 */
export function InContentLink({
  href,
  children,
  openInNewTab = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("text-primary hover:underline font-medium", className)}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}
