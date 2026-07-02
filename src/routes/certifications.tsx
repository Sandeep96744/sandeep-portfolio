import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useCertifications } from "@/lib/use-portfolio-data";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Sandeep Sharma" },
      { name: "description", content: "Professional certifications — InfyTQ, NPTEL, and Cognizant Java/MySQL training." },
      { property: "og:title", content: "Certifications — Sandeep Sharma" },
      { property: "og:description", content: "Professional certifications — InfyTQ, NPTEL, Cognizant." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  const { data: rawCerts } = useCertifications();
  const certs = [...(rawCerts ?? [])].sort((a, b) => {
    if (a.year === "—") return 1;
    if (b.year === "—") return -1;
    return parseInt(b.year) - parseInt(a.year);
  });
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Continuous learning."
        subtitle="Courses and certifications I've completed across programming, communication, and applied technology."
      />
      <section className="container-page grid gap-5 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.05}>
            <div className="surface-card surface-card-hover h-full p-7">
              <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground">
                <Award size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.year}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
