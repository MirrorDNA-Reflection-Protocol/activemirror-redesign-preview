import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, copy, align = 'left' }: Props) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-8 flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {copy ? <div className="section-copy">{copy}</div> : null}
    </div>
  );
}
