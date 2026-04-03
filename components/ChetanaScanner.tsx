'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { chetanaExamples } from '@/lib/site';

type Mode = 'screenshot' | 'message' | 'link';

type ScanResult = {
  label: string;
  score: number;
  accent: string;
  background: string;
  reasons: string[];
  actions: string[];
};

function analyzeScan(mode: Mode, input: string, fileName: string): ScanResult {
  const text = `${input} ${fileName}`.toLowerCase();

  if (
    fileName ||
    text.includes('urgent') ||
    text.includes('paid') ||
    text.includes('release') ||
    text.includes('kyc') ||
    text.includes('fee') ||
    text.includes('verify') ||
    text.includes('refund') ||
    text.includes('wa.me') ||
    text.includes('bit.ly') ||
    mode === 'link'
  ) {
    return {
      label: 'High risk',
      score: 94,
      accent: '#1F6F4A',
      background: '#E8F4EC',
      reasons: [
        'Urgency or forced action pattern',
        'Payment or KYC pressure without independent proof',
        'Suspicious sender or link behavior'
      ],
      actions: [
        'Do not pay yet',
        'Verify through an official channel',
        'Save evidence before you delete anything'
      ]
    };
  }

  if (text.includes('bank') || text.includes('parcel') || text.includes('otp')) {
    return {
      label: 'Caution',
      score: 63,
      accent: '#A56319',
      background: '#F6EAD8',
      reasons: [
        'Sensitive request with limited context',
        'Looks plausible but still needs verification',
        'Shared channels can be spoofed easily'
      ],
      actions: [
        'Pause and verify on the official app or number',
        'Do not tap new links from the message',
        'Ask someone else to sanity-check it with you'
      ]
    };
  }

  return {
    label: 'Looks okay',
    score: 22,
    accent: '#2F7A78',
    background: '#E8F1F1',
    reasons: [
      'No obvious urgency or payment push',
      'Input looks informational rather than coercive',
      'Still verify if money or identity is involved'
    ],
    actions: [
      'Continue carefully',
      'Verify if anything still feels off',
      'Keep the screenshot if the situation changes'
    ]
  };
}

export function ChetanaScanner() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<Mode>('screenshot');
  const [input, setInput] = useState('');
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<ScanResult | null>(analyzeScan('screenshot', '', ''));

  useEffect(() => {
    const exampleId = searchParams.get('example');
    const selectedExample = chetanaExamples.find((item) => item.id === exampleId);

    if (!selectedExample) {
      return;
    }

    const selectedMode = selectedExample.mode as Mode;

    setMode(selectedMode);
    setInput(selectedExample.prefill);
    setFileName(selectedMode === 'screenshot' ? 'sample-screenshot.png' : '');
    setResult(analyzeScan(selectedMode, selectedExample.prefill, selectedMode === 'screenshot' ? 'sample-screenshot.png' : ''));
  }, [searchParams]);

  const handleAnalyze = () => {
    setResult(analyzeScan(mode, input, fileName));
  };

  const handleReset = () => {
    setMode('screenshot');
    setInput('');
    setFileName('');
    setResult(analyzeScan('screenshot', '', ''));
  };

  return (
    <div id="scanner" className="glass-panel p-5 sm:p-6">
      <div className="flex flex-wrap gap-2">
        {(['screenshot', 'message', 'link'] as Mode[]).map((item) => (
          <button
            key={item}
            type="button"
            className={`scan-tab ${mode === item ? 'is-active' : ''}`}
            onClick={() => setMode(item)}
          >
            {item === 'screenshot' ? 'Upload screenshot' : item === 'message' ? 'Paste message' : 'Check link'}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr,0.95fr]">
        <div className="rounded-[1.7rem] border border-dashed border-[rgba(31,111,74,0.24)] bg-white/78 p-6 sm:p-7">
          <p className="section-eyebrow mb-2 text-[#1F6F4A]">Interactive demo</p>
          <h3 className="text-3xl font-extrabold tracking-[-0.05em] text-[var(--text)]">
            {mode === 'screenshot' ? 'Drop screenshot here' : mode === 'message' ? 'Paste the message' : 'Paste the link'}
          </h3>
          <p className="mt-3 helper-line">
            This is a live prototype. Use the examples below or try your own suspicious message pattern.
          </p>

          <div className="mt-5 grid gap-3">
            {mode === 'screenshot' ? (
              <>
                <label className="button-primary w-fit cursor-pointer">
                  Upload screenshot
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
                  />
                </label>
                <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/72 p-4 text-sm text-[var(--muted)]">
                  {fileName ? `Loaded: ${fileName}` : 'No file loaded yet. Pick an example or upload a screenshot.'}
                </div>
              </>
            ) : mode === 'message' ? (
              <textarea
                className="input-field min-h-[9rem] resize-none"
                placeholder="Paste the suspicious message here"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            ) : (
              <input
                className="input-field"
                placeholder="https://..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            )}

            <div className="flex flex-wrap gap-3">
              <button type="button" className="button-primary" onClick={handleAnalyze}>Analyze demo</button>
              <button type="button" className="button-secondary" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-[rgba(31,111,74,0.18)] p-5 sm:p-6" style={{ background: result?.background ?? '#E8F4EC' }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="section-eyebrow mb-2" style={{ color: result?.accent ?? '#1F6F4A' }}>{result?.label ?? 'Result preview'}</p>
              <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[var(--text)]">
                {result?.label === 'Looks okay' ? 'This seems lower-risk.' : 'This looks suspicious.'}
              </h3>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-extrabold" style={{ color: result?.accent ?? '#1F6F4A' }}>
              {result?.score ?? 0}%
            </span>
          </div>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[1.25rem] bg-white/70 p-4">
              <p className="text-sm font-bold text-[var(--text)]">Why it was flagged</p>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                {result?.reasons.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-[1.25rem] bg-white/70 p-4">
              <p className="text-sm font-bold text-[var(--text)]">What to do next</p>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                {result?.actions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {['Free to try', 'Built for India', 'No jargon'].map((item) => (
          <div key={item} className="info-card p-4">
            <p className="text-sm font-bold tracking-[-0.03em] text-[var(--text)]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
