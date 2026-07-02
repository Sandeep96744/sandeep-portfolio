import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useProjects } from "@/lib/use-portfolio-data";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sandeep Sharma" },
      { name: "description", content: "Selected engineering projects by Sandeep Sharma — fintech, full-stack, and side projects." },
      { property: "og:title", content: "Projects — Sandeep Sharma" },
      { property: "og:description", content: "Selected engineering projects by Sandeep Sharma." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { data: projects } = useProjects();

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built."
        subtitle="A mix of professional work and side projects — each one taught me something I still use."
      />

      <section className="container-page space-y-8 pb-24">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.04}>
            <article className="surface-card surface-card-hover overflow-hidden">
              <div className={`grid gap-0 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>img]:order-2" : ""}`}>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover md:aspect-auto md:h-full"
                />
                <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{p.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
                        <Github size={15} /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
                        <ExternalLink size={15} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
