import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/components/blogs/blog-data";

/**
 * Directory where blog content is stored
 */
const CONTENT_DIR = path.join(process.cwd(), "content/blogs");

/**
 * Scan all subdirectories (clusters) for markdown files
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const clusters = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let allPosts: BlogPost[] = [];

  clusters.forEach((cluster) => {
    const clusterPath = path.join(CONTENT_DIR, cluster);
    const files = fs.readdirSync(clusterPath).filter((file) => file.endsWith(".md"));

    files.forEach((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(clusterPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      allPosts.push({
        slug,
        cluster,
        content,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        image: data.image,
        readingTime: calculateReadingTime(content),
      });
    });
  });

  // Sort by date desc
  return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => {
      // Logic: Same category, or same cluster, or sharing tags
      if (post.category === currentPost.category) return true;
      if (post.cluster === currentPost.cluster) return true;
      if (post.tags?.some((tag) => currentPost.tags?.includes(tag))) return true;
      return false;
    })
    .slice(0, limit);
}

export function getPopularPosts(limit: number = 5): BlogPost[] {
  // Logic: For now just recent posts, or random
  return getAllPosts().slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  // Filter by category slug loosely for now as exact match might fail if casing differs
  return allPosts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase() || 
    post.category.toLowerCase() === category.replace(/-/g, ' ').toLowerCase()
  );
}

// Helper
// calculateReadingTime moved to blog-data.ts
import { calculateReadingTime } from "@/components/blogs/blog-data";
