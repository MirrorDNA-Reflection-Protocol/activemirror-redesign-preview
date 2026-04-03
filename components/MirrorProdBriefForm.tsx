'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { mirrorProdOffers } from '@/lib/site';

type FormState = {
  product: string;
  goal: string;
  audience: string;
  language: string;
  deadline: string;
};

const initialState: FormState = {
  product: '',
  goal: '',
  audience: '',
  language: '',
  deadline: ''
};

export function MirrorProdBriefForm() {
  const searchParams = useSearchParams();
  const [selectedOffer, setSelectedOffer] = useState(mirrorProdOffers[0].id);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const requestedOffer = searchParams.get('package');

    if (requestedOffer && mirrorProdOffers.some((offer) => offer.id === requestedOffer)) {
      setSelectedOffer(requestedOffer);
    }
  }, [searchParams]);

  const offer = mirrorProdOffers.find((item) => item.id === selectedOffer);
  const briefText = [
    `Package: ${offer?.title ?? 'MirrorProd brief'}`,
    `Product: ${form.product || 'Not set yet'}`,
    `Goal: ${form.goal || 'Not set yet'}`,
    `Audience / Platform: ${form.audience || 'Not set yet'}`,
    `Language: ${form.language || 'Not set yet'}`,
    `Deadline: ${form.deadline || 'Not set yet'}`,
    '',
    `Best fit: ${offer?.detail ?? ''}`
  ].join('\n');
  const subject = encodeURIComponent(`MirrorProd brief: ${form.product || 'New project'}`);
  const body = encodeURIComponent(briefText);
  const draftHref = `mailto:hello@activemirror.ai?subject=${subject}&body=${body}`;

  const updateField = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8">
      <p className="section-eyebrow">Quick brief</p>
      <h3 className="section-title max-w-none">Send product + goal.</h3>
      <p className="mt-4 section-copy">Pick a package, fill the essentials, then generate a shareable draft instead of a dead form.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {mirrorProdOffers.map((offer) => (
          <button
            key={offer.id}
            type="button"
            className={selectedOffer === offer.id ? 'scan-tab is-active' : 'scan-tab'}
            onClick={() => setSelectedOffer(offer.id)}
          >
            {offer.title}
          </button>
        ))}
      </div>

      <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
        <input className="input-field" placeholder="Product / brand" value={form.product} onChange={(event) => updateField('product', event.target.value)} />
        <input className="input-field" placeholder="What do you want this video to do?" value={form.goal} onChange={(event) => updateField('goal', event.target.value)} />
        <input className="input-field" placeholder="Platform + audience" value={form.audience} onChange={(event) => updateField('audience', event.target.value)} />
        <input className="input-field" placeholder="Hindi / English / regional" value={form.language} onChange={(event) => updateField('language', event.target.value)} />
        <input className="input-field" placeholder="Deadline or launch window" value={form.deadline} onChange={(event) => updateField('deadline', event.target.value)} />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="button-primary">Generate brief</button>
          <button type="button" className="button-secondary" onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy brief'}
          </button>
        </div>
      </form>

      {submitted ? (
        <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-white/76 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Generated draft</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[var(--text)]">{briefText}</pre>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={draftHref} className="button-primary">Open email draft</a>
            <button type="button" className="button-secondary" onClick={() => setSubmitted(false)}>Edit brief</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
