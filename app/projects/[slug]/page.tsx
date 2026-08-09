import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { Concept } from "@/components/concepts/concept";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Concept`,
    description: project.description,
  };
}

export default async function ProjectConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-5 left-5 z-50">
        <Link
          href="/#projects"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-background/80 px-4 text-sm text-foreground backdrop-blur transition-colors hover:border-zinc-600"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>
      </div>
      <div className="fixed right-5 top-5 z-50">
        <span className="inline-flex h-8 items-center rounded-full border border-line bg-background/80 px-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted backdrop-blur">
          Concept demo
        </span>
      </div>
      <Concept concept={project.concept} />
    </div>
  );
}
