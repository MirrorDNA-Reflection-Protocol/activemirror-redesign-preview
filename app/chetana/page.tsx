import { Suspense } from 'react';
import Link from 'next/link';
import { ChetanaScanner } from '@/components/ChetanaScanner';
import { PageFooter } from '@/components/PageFooter';
import { SiteNav } from '@/components/SiteNav';
import { HeroSplit } from '@/components/HeroSplit';
import { SectionTitle } from '@/components/SectionTitle';
import { TaskNavigator } from '@/components/TaskNavigator';
import { chetanaCategories, chetanaExamples, chetanaFaqs } from '@/lib/site';

export default function ChetanaPage() {
  return (
    <main className="page-shell theme-chetana">
      <SiteNav ctaLabel="Try scanner" ctaHref="#scanner" />

      <HeroSplit
        eyebrow="Chetana"
        title={
          <>
            Before you pay, <span className="accent-word">screenshot it.</span>
          </>
        }
        copy={
          <>
            <p>Upload a suspicious screenshot, paste a message, or check a link. Get a simple risk read and the next safe step.</p>
            <p className="helper-line mt-4">Free to try. Built for India. No jargon.</p>
          </>
        }
        detail={
          <>
            <span className="metric-pill">Screenshot-first scanner</span>
            <span className="metric-pill">Plain-language result</span>
            <span className="metric-pill">Recovery guidance</span>
          </>
        }
        actions={
          <>
            <Link href="#scanner" className="button-primary">Upload screenshot</Link>
            <Link href="#examples" className="button-secondary">Try an example</Link>
          </>
        }
        visual={(
          <Suspense fallback={<div className="glass-panel p-6 text-base font-semibold text-[var(--text)]">Loading scanner…</div>}>
            <ChetanaScanner />
          </Suspense>
        )}
      />

      <section id="examples" className="container-pad pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Example inputs"
            title={<>Common things people check</>}
            copy="Show the visitor exactly what the scanner is for before they wonder whether their case fits."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chetanaExamples.map((item) => (
              <Link key={item.id} href={`/chetana?example=${item.id}#scanner`} className="info-card p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Example</p>
                <h3 className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{item.title}</h3>
                <p className="mt-3 helper-line">{item.detail}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-[var(--text)]">Load into scanner →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Scam categories"
            title={<>The language stays simple even when the patterns are messy.</>}
            copy="Never make the visitor decode taxonomy first. Show the categories as recognizable situations."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {chetanaCategories.map((item) => (
              <div key={item} className="info-card flex items-center p-5">
                <p className="text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Result design"
              title={<>What Chetana gives back</>}
              copy="A signal, the reason, and the next safe step. That is the product."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Risk</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">Simple signal</p>
              </div>
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Why</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">Clear reasons</p>
              </div>
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Next step</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">What to do now</p>
              </div>
            </div>
          </div>

          <div
            className="route-card p-6 text-white sm:p-8"
            style={{ background: 'linear-gradient(140deg, #C84D3A 0%, #D78232 100%)' }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/78">If money is already gone</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em]">Act fast and keep evidence.</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/88">
              Chetana should point people to fast next steps, not just a score. Recovery copy belongs in the product, not buried in documentation.
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-white/14 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white">Immediate moves</p>
              <ul className="mt-3 grid gap-2 text-sm text-white/84">
                <li>Freeze the payment if possible</li>
                <li>Save the screenshot, link, and caller details</li>
                <li>Report through the fastest local channel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad pb-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title={<>The trust layer should stay plain.</>}
            copy="Answer the obvious questions without turning the page into a wall of copy."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {chetanaFaqs.map((item) => (
              <article key={item.question} className="faq-card p-6">
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{item.question}</h3>
                <p className="mt-3 helper-line">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFooter note="Chetana works best when the scan starts instantly and the outcome tells people exactly what to do next." />

      <TaskNavigator
        title="Want help with this screenshot?"
        actions={[
          { label: 'Upload screenshot', href: '#scanner' },
          { label: 'Try an example', href: '#examples' },
          { label: 'See result preview', href: '#scanner' }
        ]}
      />
    </main>
  );
}
