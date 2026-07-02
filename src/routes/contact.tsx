import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { useProfile } from "@/lib/use-portfolio-data";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sandeep Sharma" },
      { name: "description", content: "Get in touch with Sandeep Sharma — collaborations, opportunities, and engineering conversations." },
      { property: "og:title", content: "Contact — Sandeep Sharma" },
      { property: "og:description", content: "Get in touch with Sandeep Sharma." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { data: profile } = useProfile();
  const [sending, setSending] = useState(false);

  
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      createdAt: serverTimestamp(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: payload.name,
          from_email: payload.email,
          message: payload.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (isFirebaseConfigured && db) {
        await addDoc(collection(db, "messages"), payload);
      }

      toast.success("Thanks! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send — please email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together."
        subtitle="Whether it's an opportunity, a collaboration, or just a chat about engineering — I'd love to hear from you."
      />

      <section className="container-page grid gap-10 pb-24 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="surface-card h-full p-8">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Coding along with a sip of coffee ☕ sounds good. Feel free to reach out for any kind of engineering conversation.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-foreground hover:text-accent">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted"><Mail size={16} /></span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground hover:text-accent">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted"><Phone size={16} /></span>
                {profile.phone}
              </a>
              <p className="flex items-center gap-3 text-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted"><MapPin size={16} /></span>
                {profile.location}
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2.5 text-muted-foreground hover:border-border-strong hover:text-foreground">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted-foreground hover:border-border-strong hover:text-foreground">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={onSubmit} className="surface-card space-y-4 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
                <input id="name" name="name" required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea id="message" name="message" required rows={6} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground" placeholder="Tell me what you're working on…" />
            </div>
            <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60">
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
