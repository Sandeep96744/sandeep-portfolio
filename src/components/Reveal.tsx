import { motion, type HTMLMotionProps } from "motion/react";
import { type ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & { children: ReactNode; delay?: number };

export function Reveal({ children, delay = 0, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
      <Reveal>
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
