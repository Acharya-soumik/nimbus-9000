// duplicate imports removed

import { BlogsClient } from "./client";
import { getAllPosts, getPopularPosts } from "@/lib/blog";
import { mockCategories } from "@/components/blogs/blog-data";

export const metadata = {
  title: "Legal Blog & Insights | VakalatnaamaToday",
  description:
    "Explore our latest articles, guides, and legal insights on property law, criminal law, divorce, and more.",
};

export default function BlogsPage() {
  const allPosts = getAllPosts();
  const popularPosts = getPopularPosts(5);

  return (
    <BlogsClient
      initialPosts={allPosts}
      popularPosts={popularPosts}
      allCategories={mockCategories}
    />
  );
}
