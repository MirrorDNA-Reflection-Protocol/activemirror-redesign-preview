'use client';

import { useState } from 'react';
import Link from 'next/link';

type Action = { label: string; href: string };

type Props = {
  title: string;
  actions: Action[];
};

export function TaskNavigator({ title, actions }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 md:bottom-5 md:right-5">
      {open && (
        <div className="w-[min(340px,calc(100vw-2rem))] rounded-[1.75rem] border border-[var(--border)] bg-[rgba(255,255,255,0.92)] p-4 shadow-[var(--shadow)] backdrop-blur">
          <p className="mb-3 text-sm font-bold tracking-[-0.02em] text-[var(--text)]">{title}</p>
          <div className="grid gap-2">
            {actions.map((action) => (
              <Link key={action.label} href={action.href} className="button-secondary w-full justify-between">
                {action.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <button
        className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-3 py-3 text-sm font-bold text-white shadow-[var(--shadow-strong)] transition hover:translate-y-[-2px] sm:gap-3 sm:px-4"
        onClick={() => setOpen((s) => !s)}
        aria-label="Open site helper"
        aria-expanded={open}
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-lg">◉</span>
        <span className="hidden sm:inline">{open ? 'Close guide' : 'Quick guide'}</span>
      </button>
    </div>
  );
}
