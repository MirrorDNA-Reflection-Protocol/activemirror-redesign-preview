import Link from 'next/link';

type Props = {
  note: string;
};

export function PageFooter({ note }: Props) {
  return (
    <footer className="container-pad pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl footer-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <span className="eyebrow">Active MirrorOS</span>
            <p className="helper-line">{note}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="button-secondary">
              Home
            </Link>
            <Link href="/chetana" className="button-secondary">
              Chetana
            </Link>
            <Link href="/mirrorprod-india" className="button-secondary">
              MirrorProd India
            </Link>
            <Link href="/mirrorseed" className="button-secondary">
              Mirror Seed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
