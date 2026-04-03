import Link from 'next/link';
import { MediaCard } from '@/components/MediaCard';
import { MirrorSeedBuilder } from '@/components/MirrorSeedBuilder';
import { PageFooter } from '@/components/PageFooter';
import { SiteNav } from '@/components/SiteNav';
import { HeroSplit } from '@/components/HeroSplit';
import { SectionTitle } from '@/components/SectionTitle';
import { TaskNavigator } from '@/components/TaskNavigator';
import { mirrorSeedBenefits, mirrorSeedFaqs, mirrorSeedMedia } from '@/lib/site';

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
            <p className="helper-line mt-4">Simple to use, quick to copy, and easy to edit later.</p>
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
          <div className="grid gap-4 sm:grid-cols-2">
            {mirrorSeedMedia.map((item, index) => (
              <div key={item.title} id={index === 1 ? 'steps' : undefined} className={index === 0 ? 'sm:col-span-2' : ''}>
                <MediaCard
                  alt={item.alt}
                  kind={item.kind}
                  label={item.label}
                  note={item.note}
                  ratio={index === 0 ? 'wide' : index === 2 ? 'square' : 'landscape'}
                  src={item.src}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        }
      />

      <section id="create" className="container-pad pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.04fr,0.96fr]">
          <MirrorSeedBuilder />

          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Benefits"
              title={<>Why people use it</>}
              copy="Save your setup once and stop rewriting the same context every time."
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
            title={<>Common questions</>}
            copy="Short answers before you generate your seed."
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

      <PageFooter note="Mirror Seed makes your AI setup reusable, editable, and easy to carry between tools." />

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
