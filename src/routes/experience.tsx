import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useExperiences } from "@/lib/use-portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sandeep Sharma" },
      { name: "description", content: "Sandeep Sharma's professional experience — StyloPay, Uber, mthree." },
      { property: "og:title", content: "Experience — Sandeep Sharma" },
      { property: "og:description", content: "Sandeep Sharma's professional experience — StyloPay, Uber, mthree." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { data: rawExperiences } = useExperiences();
  const experiences = [...(rawExperiences ?? [])].sort((a, b) => {
    // "Present" always comes first
    if (a.end === "Present") return -1;
    if (b.end === "Present") return 1;
    return parseInt(b.end) - parseInt(a.end);
  });
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A timeline of work I'm proud of."
        subtitle="Two years across fintech, freelance, and structured training — each one shaped how I write software today."
      />

      <section className="container-page pb-24">
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-border md:block" aria-hidden />
          <ol className="space-y-6 md:space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.05}>
                <li className="relative md:pl-12">
                  <span className="absolute left-0 top-7 hidden size-2.5 rounded-full bg-accent ring-4 ring-background md:block" />
                  <article className="surface-card p-7 md:p-9">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="chip whitespace-nowrap">{exp.start} – {exp.end}</span>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
