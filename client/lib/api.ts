import type { BlogPost, Education, Experience, Project, Skill } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function fetchJson<T>(path: string, fallback: T, revalidate = 60): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate } });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    // API not reachable (e.g. backend not running yet) — fail soft so the
    // page still renders instead of crashing the build/request.
    return fallback;
  }
}

export const getProjects = () => fetchJson<Project[]>("/api/projects", []);
export const getFeaturedProjects = () => fetchJson<Project[]>("/api/projects?featured_only=true", []);
export const getProject = (slug: string) =>
  fetchJson<Project | null>(`/api/projects/${slug}`, null);
export const getSkills = () => fetchJson<Skill[]>("/api/skills", []);
export const getExperience = () => fetchJson<Experience[]>("/api/experience", []);
export const getEducation = () => fetchJson<Education[]>("/api/education", []);
export const getBlogPosts = () => fetchJson<BlogPost[]>("/api/blog", []);
export const getBlogPost = (slug: string) => fetchJson<BlogPost | null>(`/api/blog/${slug}`, null);

export async function sendContactMessage(payload: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error("Failed to send message");
  }
  return res.json() as Promise<{ success: boolean; message: string }>;
}
