'use client';

import Link from 'next/link';
import { useState } from 'react';

type Props = {
  ctaLabel?: string;
  ctaHref?: string;
};

const navItems = [
  { href: '/chetana', label: 'Chetana' },
  { href: '/mirrorprod-india', label: 'MirrorProd India' },
  { href: '/mirrorseed', label: 'Mirror Seed' }
];

export function SiteNav({ ctaLabel = 'Contact', ctaHref = '#' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="container-pad sticky top-0 z-40 pt-3">
      <div className="mx-auto max-w-7xl">
        <div className="nav-shell flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
          <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
            <span className="brand-chip">AM</span>
            <span className="flex flex-col">
              <span className="text-sm font-extrabold tracking-[-0.03em]">Active MirrorOS</span>
              <span className="text-xs font-medium text-[#6e655d]">Pick the path that fits.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="menu-button md:hidden"
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle site menu"
            >
              Menu
            </button>
            <Link href={ctaHref} className="button-primary px-4 py-3 text-xs sm:px-5 sm:text-sm">
              {ctaLabel}
            </Link>
          </div>
        </div>

        {open ? (
          <div className="nav-sheet md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="button-secondary justify-between"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
