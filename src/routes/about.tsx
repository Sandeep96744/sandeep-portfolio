import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useEducation, useInterests, useProfile } from "@/lib/use-portfolio-data";
import profileImg from "@/assets/profile.png";
import { Code2, Brain, Trophy, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sandeep Sharma" },
      { name: "description", content: "About Sandeep Sharma — Java Software Engineer, education, and interests." },
      { property: "og:title", content: "About — Sandeep Sharma" },
      { property: "og:description", content: "About Sandeep Sharma — Java Software Engineer, education, and interests." },
    ],
  }),
  component: AboutPage,
});

const iconMap = { code: Code2, brain: Brain, trophy: Trophy, layers: Layers } as const;

function AboutPage() {
  const { data: profile } = useProfile();
  const { data: education } = useEducation();
  const { data: interests } = useInterests();

  return (
    <>
      <PageHeader eyebrow="About" title="A bit about me." subtitle={profile.tagline} />

      <section className="container-page grid gap-12 pb-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div
            className="overflow-hidden rounded-3xl border border-border"
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 50% 15%, hsl(var(--accent)/0.10), transparent 55%), linear-gradient(180deg, var(--color-surface-elevated), var(--color-muted))",
            }}
          >
            <img src={profileImg} alt={profile.name} width={768} height={960} loading="lazy" className="aspect-[4/5] w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]" />
          </div>

        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg leading-relaxed text-foreground/90">{profile.bio}</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I started writing code in college because I liked the feeling of small wins — green tests, a clean diff, a service that just works. That hasn't really changed. These days I work mostly in Java and Spring Boot, with a soft spot for sharp APIs, predictable systems, and code the next engineer can read without a guide.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Outside work, I keep my fundamentals sharp with competitive programming and explore a fair amount of system design. Coffee helps.
          </p>
        </Reveal>
      </section>

      {/* Education */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <p className="section-eyebrow">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Where I studied.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <div className="surface-card surface-card-hover h-full p-7">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.year}</p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{e.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{e.score}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <p className="section-eyebrow">Interests</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What keeps me curious.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {interests.map((it, i) => {
            const Icon = iconMap[it.icon as keyof typeof iconMap] ?? Code2;
            return (
              <Reveal key={it.id} delay={i * 0.05}>
                <div className="surface-card surface-card-hover h-full p-7">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
