import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  copy: ReactNode;
  actions: ReactNode;
  visual: ReactNode;
  detail?: ReactNode;
};

export function HeroSplit({ eyebrow, title, copy, actions, visual, detail }: Props) {
  return (
    <section className="container-pad section-pad pt-8 sm:pt-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center xl:gap-14">
        <div className="space-y-6">
          <span className="eyebrow rise-in">{eyebrow}</span>
          <div className="space-y-5">
            <h1 className="hero-title rise-in delay-1">{title}</h1>
            <div className="hero-copy rise-in delay-2">{copy}</div>
          </div>
          {detail ? <div className="metric-strip rise-in delay-2">{detail}</div> : null}
          <div className="flex flex-wrap gap-3 rise-in delay-3">{actions}</div>
        </div>
        <div className="hero-stage rise-in delay-2">{visual}</div>
      </div>
    </section>
  );
}
