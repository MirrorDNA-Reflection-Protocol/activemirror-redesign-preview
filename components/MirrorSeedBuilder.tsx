'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle';

type SeedState = {
  name: string;
  role: string;
  tone: string;
  priorities: string;
  boundaries: string;
};

const exampleState: SeedState = {
  name: 'Paul',
  role: 'Founder / operator / builder',
  tone: 'Direct, warm, useful, no fluff',
  priorities: 'Clarity, momentum, accuracy, fast next steps',
  boundaries: 'Do not pad, do not guess, show the tradeoff clearly'
};

const emptyState: SeedState = {
  name: '',
  role: '',
  tone: '',
  priorities: '',
  boundaries: ''
};

export function MirrorSeedBuilder() {
  const [form, setForm] = useState<SeedState>(exampleState);
  const [copied, setCopied] = useState(false);

  const seedText = [
    '# Portable Identity Starter',
    '',
    `Name: ${form.name || 'Your name'}`,
    `Role: ${form.role || 'Your role'}`,
    `Tone: ${form.tone || 'How you want the AI to sound and think'}`,
    `Priorities: ${form.priorities || 'What matters most in the work'}`,
    `Boundaries: ${form.boundaries || 'What the AI should avoid or protect'}`,
    '',
    'Instruction: Start from this identity, keep continuity clean, and adapt only when the task requires it.'
  ].join('\n');

  const updateField = (key: keyof SeedState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(seedText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8">
      <SectionTitle
        eyebrow="Portable identity starter"
        title={<>Keep the setup compact and reusable.</>}
        copy="Fill the fields once, then copy a starter you can paste into any AI tool."
      />
      <div className="grid gap-3">
        <input className="input-field" placeholder="What should the AI call you?" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
        <input className="input-field" placeholder="Role or lane" value={form.role} onChange={(event) => updateField('role', event.target.value)} />
        <textarea className="input-field min-h-[6.5rem] resize-none" placeholder="Tone" value={form.tone} onChange={(event) => updateField('tone', event.target.value)} />
        <textarea className="input-field min-h-[6.5rem] resize-none" placeholder="Priorities" value={form.priorities} onChange={(event) => updateField('priorities', event.target.value)} />
        <textarea className="input-field min-h-[6.5rem] resize-none" placeholder="Boundaries" value={form.boundaries} onChange={(event) => updateField('boundaries', event.target.value)} />
      </div>

      <div className="mt-6 rounded-[1.7rem] border border-[rgba(47,122,120,0.18)] bg-white/78 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Generated seed</p>
        <pre className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[var(--text)]">{seedText}</pre>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="button-primary" onClick={() => setForm(exampleState)}>Load example</button>
        <button type="button" className="button-secondary" onClick={() => setForm(emptyState)}>Clear fields</button>
        <button type="button" className="button-secondary" onClick={handleCopy}>{copied ? 'Copied' : 'Copy seed'}</button>
      </div>
    </div>
  );
}
