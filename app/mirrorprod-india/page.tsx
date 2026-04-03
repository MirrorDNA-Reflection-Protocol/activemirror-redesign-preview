import { Suspense } from 'react';
import Link from 'next/link';
import { MirrorProdBriefForm } from '@/components/MirrorProdBriefForm';
import { PageFooter } from '@/components/PageFooter';
import { SiteNav } from '@/components/SiteNav';
import { HeroSplit } from '@/components/HeroSplit';
import { SectionTitle } from '@/components/SectionTitle';
import { TaskNavigator } from '@/components/TaskNavigator';
import { mirrorProdFaqs, mirrorProdOffers, mirrorProdSamples, mirrorProdSteps } from '@/lib/site';

export default function MirrorProdPage() {
  return (
    <main className="page-shell theme-mirrorprod">
      <SiteNav ctaLabel="Send brief" ctaHref="#brief" />

      <HeroSplit
        eyebrow="MirrorProd India"
        title={
          <>
            Ads and short videos people actually <span className="accent-word">watch.</span>
          </>
        }
        copy={
          <>
            <p>24-30 second product ads, founder reels, and micro-drama shorts for Indian brands.</p>
            <p className="helper-line mt-4">Fast turnaround. Hindi + regional variants. Built for mobile-first campaigns.</p>
          </>
        }
        detail={
          <>
            <span className="metric-pill">Samples first</span>
            <span className="metric-pill">Offer ladder</span>
            <span className="metric-pill">Brief in under a minute</span>
          </>
        }
        actions={
          <>
            <Link href="#samples" className="button-primary">See samples</Link>
            <Link href="#brief" className="button-secondary">Send a brief</Link>
          </>
        }
        visual={
          <div className="grid gap-4 sm:grid-cols-2">
            {mirrorProdSamples.slice(0, 3).map((sample, index) => (
              <Link
                key={sample.title}
                href={`/mirrorprod-india?package=${sample.packageId}#brief`}
                className={`poster-card p-4 ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div
                  className={`poster-art ${index === 0 ? 'min-h-[17rem]' : 'min-h-[12.5rem]'}`}
                  style={{ backgroundImage: sample.art }}
                >
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-white/18 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {sample.tag}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-white">{sample.title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{sample.note}</p>
                    </div>
                    <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {sample.stat}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        }
      />

      <section id="samples" className="container-pad pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Samples"
            title={<>A few directions you can start with</>}
            copy="Show samples fast. The visitor should feel motion and range before they see the brief form."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {mirrorProdSamples.map((sample) => (
              <Link key={sample.title} href={`/mirrorprod-india?package=${sample.packageId}#brief`} className="poster-card p-4">
                <div className="poster-art min-h-[13rem]" style={{ backgroundImage: sample.art }}>
                  <div className="absolute inset-x-4 bottom-4 z-10">
                    <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {sample.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                  <span>{sample.tag}</span>
                  <span>{sample.stat}</span>
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{sample.title}</h3>
                <p className="mt-3 helper-line">{sample.note}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-[var(--text)]">Use this direction →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr,0.92fr]">
          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Offer ladder"
              title={<>What you can buy</>}
              copy="Keep the packages easy to understand. Match the offer to the story job."
            />
            <div className="grid gap-4">
              {mirrorProdOffers.map((offer) => (
                <article key={offer.title} className="info-card p-5">
                  <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{offer.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-[var(--text)]">{offer.copy}</p>
                  <p className="mt-2 helper-line">{offer.detail}</p>
                  <Link href={`/mirrorprod-india?package=${offer.id}#brief`} className="mt-4 inline-flex text-sm font-bold text-[var(--text)]">
                    Start with this package →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="How it works"
              title={<>Keep the flow short and cinematic.</>}
              copy="The visitor should see a path from product + goal to usable creative without guessing what happens next."
            />
            <div className="grid gap-3">
              {mirrorProdSteps.map((step, index) => (
                <article key={step} className="info-card flex items-center gap-4 p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-extrabold text-[var(--text)]">
                    0{index + 1}
                  </span>
                  <p className="text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brief" className="container-pad pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.08fr,0.92fr]">
          <Suspense fallback={<div className="glass-panel p-6 text-base font-semibold text-[var(--text)]">Loading brief builder…</div>}>
            <MirrorProdBriefForm />
          </Suspense>

          <div className="glass-panel p-6 sm:p-8">
            <SectionTitle
              eyebrow="Trust block"
              title={<>Provenance sits behind the value, not ahead of it.</>}
              copy="Once the direction is right, add verification and provenance detail where the buyer actually needs reassurance."
            />
            <div className="grid gap-3">
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]">What they need first</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">Samples, offer, and speed.</p>
              </div>
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]">What they need next</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">Clear delivery path and a compact brief.</p>
              </div>
              <div className="info-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]">When provenance matters</p>
                <p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-[var(--text)]">After the creative fit is obvious.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad pb-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title={<>Answer the obvious friction early.</>}
            copy="A few tight answers can remove hesitation without making the page feel like documentation."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {mirrorProdFaqs.map((item) => (
              <article key={item.question} className="faq-card p-6">
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[var(--text)]">{item.question}</h3>
                <p className="mt-3 helper-line">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFooter note="MirrorProd India should feel quick, glossy, and commercial without hiding the next step behind strategy language." />

      <TaskNavigator
        title="Need the right package?"
        actions={[
          { label: 'Product ad', href: '#brief' },
          { label: 'Founder reel', href: '#brief' },
          { label: 'Micro-drama pilot', href: '#brief' }
        ]}
      />
    </main>
  );
}
