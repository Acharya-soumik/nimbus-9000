import Link from "next/link";
import { cn } from "@/lib/utils";

interface RelatedContentItem {
  type: "guide" | "blog" | "service";
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentSectionProps {
  title?: string;
  items: RelatedContentItem[];
  className?: string;
}

export function RelatedContentSection({
  title = "Related Resources",
  items,
  className,
}: RelatedContentSectionProps) {
  const groupedItems = {
    services: items.filter((i) => i.type === "service"),
    guides: items.filter((i) => i.type === "guide"),
    blogs: items.filter((i) => i.type === "blog"),
  };

  return (
    <section className={cn("py-12 bg-muted/30 rounded-lg", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-text-heading">{title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
            {groupedItems.services.length > 0 && (
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="text-xl">🛠️</span> Related Services
                </h3>
                <ul className="space-y-3">
                {groupedItems.services.map((item) => (
                    <li key={item.href} className="border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <Link
                        href={item.href}
                        className="text-primary hover:underline font-medium block"
                    >
                        {item.title}
                    </Link>
                    {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                        </p>
                    )}
                    </li>
                ))}
                </ul>
            </div>
            )}

            {(groupedItems.guides.length > 0 || groupedItems.blogs.length > 0) && (
                <div>
                    {groupedItems.guides.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                             <span className="text-xl">📚</span> Helpful Guides
                        </h3>
                        <ul className="space-y-3">
                        {groupedItems.guides.map((item) => (
                            <li key={item.href} className="border-b border-border/50 pb-2 last:border-0 last:pb-0">
                            <Link
                                href={item.href}
                                className="text-primary hover:underline font-medium block"
                            >
                                {item.title}
                            </Link>
                            {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                                </p>
                            )}
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}

                    {groupedItems.blogs.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="text-xl">📝</span> Related Articles
                        </h3>
                        <ul className="space-y-3">
                        {groupedItems.blogs.map((item) => (
                            <li key={item.href} className="border-b border-border/50 pb-2 last:border-0 last:pb-0">
                            <Link
                                href={item.href}
                                className="text-primary hover:underline font-medium block"
                            >
                                {item.title}
                            </Link>
                            {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                                </p>
                            )}
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
