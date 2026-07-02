import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useSkills } from "@/lib/use-portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sandeep Sharma" },
      { name: "description", content: "Tech stack and skills — Java, Spring Boot, React, SQL, microservices and more." },
      { property: "og:title", content: "Skills — Sandeep Sharma" },
      { property: "og:description", content: "Tech stack and skills — Java, Spring Boot, React, SQL, microservices." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { data: skills } = useSkills();
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The tools I reach for."
        subtitle="Languages and frameworks I use daily, plus the dev tools and concepts that shape how I work."
      />
      <section className="container-page grid gap-6 pb-24 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.05}>
            <div className="surface-card p-8 h-full">
              <p className="section-eyebrow">{s.group}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-surface-elevated px-3.5 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:border-border-strong hover:bg-muted"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
