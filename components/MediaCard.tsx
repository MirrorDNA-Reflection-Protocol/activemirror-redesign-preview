import Link from 'next/link';
import { withBasePath } from '@/lib/basePath';

type Props = {
  alt: string;
  kind?: 'image' | 'video';
  label?: string;
  note?: string;
  poster?: string;
  ratio?: 'landscape' | 'portrait' | 'square' | 'wide';
  src: string;
  title?: string;
  href?: string;
};

export function MediaCard({
  alt,
  href,
  kind = 'image',
  label,
  note,
  poster,
  ratio = 'landscape',
  src,
  title
}: Props) {
  const classes = ['media-card', `is-${ratio}`].join(' ');
  const assetSrc = withBasePath(src);
  const posterSrc = poster ? withBasePath(poster) : undefined;

  const card = (
    <article className={classes}>
      <div className="media-frame">
        {label ? <span className="media-badge">{label}</span> : null}
        {kind === 'video' ? (
          <video className="media-asset" autoPlay loop muted playsInline poster={posterSrc} preload="metadata" aria-label={alt}>
            <source src={assetSrc} type="video/mp4" />
          </video>
        ) : (
          <img className="media-asset" src={assetSrc} alt={alt} loading="lazy" decoding="async" />
        )}
      </div>
      {title || note ? (
        <div className="media-copy-block">
          {title ? <h3 className="media-title">{title}</h3> : null}
          {note ? <p className="media-note">{note}</p> : null}
        </div>
      ) : null}
    </article>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  );
}
