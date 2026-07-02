import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.png";
import { Reveal } from "@/components/Reveal";
import { useProjects } from "@/lib/use-portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandeep Sharma — Software Engineer" },
      {
        name: "description",
        content:
          "Java Software Engineer building fintech microservices at StyloPay. Spring Boot, React, clean architecture.",
      },
      { property: "og:title", content: "Sandeep Sharma — Software Engineer" },
      {
        property: "og:description",
        content: "Java Software Engineer building fintech microservices at StyloPay.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { data: projects } = useProjects();
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="container-page relative grid gap-12 pt-16 pb-24 md:grid-cols-[1.4fr_1fr] md:pt-28 md:pb-32">
          <div>
            <Reveal>
              <span className="chip">
                <span className="size-1.5 rounded-full bg-accent" />
                Available for new opportunities
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Hi, I'm Sandeep —
                <br />
                I engineer <span className="text-accent">software</span> that scales.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
                Java Software Engineer at <span className="text-foreground">StyloPay</span>, shipping fintech
                microservices, REST APIs, and clean, maintainable systems. Previously freelanced for Uber and trained at mthree (Wiley Edge).
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  See my work
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-muted"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} />
                Kolkata, India · sandeepsharma96744@gmail.com
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
              style={{
                backgroundImage:
                  "radial-gradient(120% 90% at 50% 15%, hsl(var(--accent)/0.10), transparent 55%), linear-gradient(180deg, var(--color-surface-elevated), var(--color-muted))",
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={profileImg}
                alt="Sandeep Sharma"
                width={768}
                height={960}
                className="aspect-[4/5] w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-sm font-semibold">Sandeep Sharma</p>
                <p className="text-xs text-muted-foreground">Software Engineer · StyloPay</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* WHAT I DO STRIP */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <p className="section-eyebrow">What I do</p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Backend-first engineering, full-stack when it ships better products.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Microservices",
              body: "Spring Boot services with hardened validation, secure logging, and clean separation of concerns.",
            },
            {
              title: "APIs & Integration",
              body: "REST APIs, JDBC, schema design, and tight contracts that downstream teams can rely on.",
            },
            {
              title: "Full-stack delivery",
              body: "React + Node frontends for dashboards and developer docs that make complex systems usable.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="surface-card surface-card-hover h-full p-7">
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Featured projects.</h2>
          </Reveal>
          <Reveal>
            <Link to="/projects" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline-flex">
              All projects →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <article className="surface-card surface-card-hover group h-full overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <div className="surface-card overflow-hidden">
            <div className="grid items-center gap-8 p-8 md:grid-cols-[1.5fr_1fr] md:p-12">
              <div>
                <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Have a problem worth solving?
                </h2>
                <p className="mt-3 max-w-lg text-muted-foreground">
                  I'm always up for a chat about backend systems, fintech, or interesting engineering challenges.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
                >
                  Get in touch
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
