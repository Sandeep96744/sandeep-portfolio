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

function ProjectCard({ p, i }: { p: any; i: number }) {
  return (
    <Reveal key={p.id} delay={i * 0.04}>
      <article className="surface-card surface-card-hover overflow-hidden">
        <div className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>img]:order-2" : ""}`}>
          {p.imageUrl ? (
            <img
              src={p.imageUrl}
              alt={p.name}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-full"
            />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center bg-muted lg:aspect-auto lg:h-full">
              <p className="text-xs text-muted-foreground">Architecture Project</p>
            </div>
          )}
          <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
            {p.status && (
              <span className="inline-flex w-fit rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                {p.status}
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">{p.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t: string) => (
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
  );
}

function ProjectsPage() {
  const { data: projects } = useProjects();
  const active = projects.filter((p) => !p.status);
  const research = projects.filter((p) => p.status);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built."
        subtitle="A mix of professional work and side projects — each one taught me something I still use."
      />

      <section className="container-page space-y-8 pb-24">
        {active.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </section>

      {research.length > 0 && (
        <>
          <div className="container-page pb-6">
            <Reveal>
              <p className="section-eyebrow">Research & Architecture</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Systems I've designed.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Product thinking and architecture work — no code, but the hardest problems live here.
              </p>
            </Reveal>
          </div>
          <section className="container-page space-y-8 pb-24">
            {research.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </section>
        </>
      )}
    </>
  );
}