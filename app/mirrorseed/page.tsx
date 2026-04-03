import Link from 'next/link';
import { MirrorSeedBuilder } from '@/components/MirrorSeedBuilder';
import { PageFooter } from '@/components/PageFooter';
import { SiteNav } from '@/components/SiteNav';
import { HeroSplit } from '@/components/HeroSplit';
import { SectionTitle } from '@/components/SectionTitle';
import { TaskNavigator } from '@/components/TaskNavigator';
import { mirrorSeedBenefits, mirrorSeedFaqs } from '@/lib/site';

export default function MirrorSeedPage() {
  return (
    <main className="page-shell theme-mirrorseed">
      <SiteNav ctaLabel="Create seed" ctaHref="#create" />
      <HeroSplit
        eyebrow="Mirror Seed"
        title={
          <>
            Stop repeating yourself to <span className="accent-word">AI.</span>
          </>
        }
        copy={
          <>
            <p>Create a portable identity starter you can reuse across tools and sessions.</p>
            <p className="helper-line mt-4">Simple utility, calm hierarchy, and the clearest flow in the family.</p>
          </>
        }
        detail={
          <>
            <span className="metric-pill">Portable starter</span>
            <span className="metric-pill">Paste into any AI</span>
            <span className="metric-pill">Edit later</span>
          </>
        }
        actions={
          <>
            <Link href="#create" className="button-primary">Create my seed</Link>
            <Link href="#steps" className="button-secondary">How it works</Link>
          </>
        }
        visual={
          <div className="glass-panel p-6 sm:p-8">
            <p className="section-eyebrow mb-2 text-[#2F7A78]">3-step flow</p>
            <div id="steps" className="grid gap-3">
              {['Generate your seed', 'Save it', 'Paste it into any AI'].map((step, index) => (
                <div key={step} className="info-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Step {index + 1}</p>
                  <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.6rem] border border-[rgba(47,122,120,0.18)] bg-[rgba(47,122,120,0.08)] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Preview</p>
              <div className="mt-3 grid gap-2">
                {['Tone: crisp, direct, warm', 'Role: founder / operator / builder', 'Boundaries: no fluff, clear next step', 'Memory: portable between sessions'].map((item) => (
                  <div key={item} className="rounded-full border border-[rgba(47,122,120,0.16)] bg-white/70 px-4 py-3 text-sm font-semibold text-[var(--text)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />

      <section id="create" className="container-pad pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.04fr,0.96fr]">
          <MirrorSeedBuilder />

          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Benefits"
              title={<>The value is less repetition, not more ceremony.</>}
              copy="Keep the payoff obvious and practical."
            />
            <div className="grid gap-4">
              {mirrorSeedBenefits.map((item) => (
                <article key={item.title} className="info-card p-5">
                  <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{item.title}</h3>
                  <p className="mt-3 helper-line">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad pb-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title={<>Short answers keep the utility feeling light.</>}
            copy="This page should remove hesitation, not introduce a second onboarding flow."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {mirrorSeedFaqs.map((item) => (
              <article key={item.question} className="faq-card p-6">
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{item.question}</h3>
                <p className="mt-3 helper-line">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFooter note="Mirror Seed should stay calm, portable, and immediately understandable without dressing up the utility." />

      <TaskNavigator
        title="Need help with this page?"
        actions={[
          { label: 'Create my seed', href: '#create' },
          { label: 'How it works', href: '#steps' },
          { label: 'Go back home', href: '/' }
        ]}
      />
    </main>
  );
}
