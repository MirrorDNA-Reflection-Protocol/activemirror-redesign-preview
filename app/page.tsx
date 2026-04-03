import Link from 'next/link';
import { PageFooter } from '@/components/PageFooter';
import { SiteNav } from '@/components/SiteNav';
import { HeroSplit } from '@/components/HeroSplit';
import { SectionTitle } from '@/components/SectionTitle';
import { TaskNavigator } from '@/components/TaskNavigator';
import { withBasePath } from '@/lib/basePath';
import { homeCards, homeProof, homeReasons } from '@/lib/site';

export default function HomePage() {
  return (
    <main className="page-shell theme-home">
      <SiteNav ctaLabel="Choose a path" ctaHref="#products" />

      <HeroSplit
        eyebrow="Active MirrorOS"
        title={
          <>
            What do you need <span className="accent-word">right now</span>?
          </>
        }
        copy={
          <>
            <p>Pick what you need. Check a suspicious screenshot, make an ad or reel, or create an AI setup you can keep reusing.</p>
            <p className="helper-line mt-4">
              Three clear products. Start with the one that fits what you need right now.
            </p>
          </>
        }
        detail={
          <>
            <span className="metric-pill">3 products</span>
            <span className="metric-pill">Fast to try</span>
            <span className="metric-pill">Phone + laptop friendly</span>
          </>
        }
        actions={
          <>
            <Link href="#products" className="button-primary">Choose a path</Link>
            <Link href="#proof" className="button-secondary">See proof</Link>
          </>
        }
        visual={
          <div className="glass-panel p-5 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="section-eyebrow mb-2">Start here</p>
                <p className="text-sm font-semibold tracking-[-0.03em] text-[var(--text)]">Choose the product that matches the problem.</p>
              </div>
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--text)]">
                Live preview
              </span>
            </div>
            <div className="grid gap-4">
              {homeCards.map((card, index) => (
                <Link key={card.title} href={card.href} className="route-card p-5 sm:p-6">
                  <div className="route-rail" style={{ backgroundImage: card.accent }} />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-[var(--text)]">
                        {card.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-xs font-bold text-[var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">{card.copy}</p>
                  <p className="mt-3 helper-line">{card.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-white/72 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex text-sm font-bold text-[var(--text)]">{card.cta} →</span>
                </Link>
              ))}
            </div>
          </div>
        }
      />

      <section id="products" className="container-pad pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Choose a path"
            title={<>Three clear ways to start.</>}
            copy="Choose the job you want done, then go straight into the product."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {homeCards.map((card) => (
              <Link key={card.title} href={card.href} className="route-card p-6 sm:p-7">
                <div className="route-rail" style={{ backgroundImage: card.accent }} />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{card.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--text)]">{card.title}</h3>
                <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">{card.copy}</p>
                <p className="mt-4 helper-line">{card.description}</p>
                <div className="mt-5 media-frame" style={{ aspectRatio: '4 / 3' }}>
                  <img className="media-asset" src={withBasePath(card.mediaSrc)} alt={card.mediaAlt} loading="lazy" decoding="async" />
                </div>
                <ul className="mt-5 grid gap-2">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[var(--text)]">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundImage: card.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex text-sm font-bold text-[var(--text)]">{card.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="container-pad pb-14">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Why people come here"
              title={<>People usually come here for one thing.</>}
              copy="A scam check, a better video, or a reusable AI setup. The homepage should make that clear fast."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {homeReasons.map((reason) => (
                <article key={reason.title} className="info-card p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Common job</p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{reason.title}</h3>
                  <p className="mt-3 helper-line">{reason.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Proof"
              title={<>Quick proof, then the next step.</>}
              copy="Real screens and short demos help people decide faster than long explanations."
            />
            <div className="proof-strip">
              {homeProof.map((item, index) => (
                <div key={item} className="info-card flex items-center gap-4 p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-extrabold text-[var(--text)]">
                    0{index + 1}
                  </span>
                  <p className="text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFooter note="Active MirrorOS brings Chetana, MirrorProd India, and Mirror Seed into one simple front door." />

      <TaskNavigator
        title="Need help finding the right tool?"
        actions={[
          { label: 'Check a screenshot', href: '/chetana' },
          { label: 'Make an ad', href: '/mirrorprod-india' },
          { label: 'Create my AI identity', href: '/mirrorseed' }
        ]}
      />
    </main>
  );
}
