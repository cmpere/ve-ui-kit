type BrandProps = { inverse?: boolean; compact?: boolean; className?: string }

export function VEMonogram({ inverse = false, className = '' }: BrandProps) {
  return <span className={`monogram ${inverse ? 'inverse' : ''} ${className}`} aria-label="V and E">V<span>&amp;</span>E</span>
}

export function BrandLockup({ inverse = false, compact = false, className = '' }: BrandProps) {
  return <div className={`brand-lockup ${inverse ? 'inverse' : ''} ${compact ? 'compact' : ''} ${className}`}>
    <VEMonogram inverse={inverse} />
    {!compact && <><span className="brand-descriptor">FASHION <i>•</i> BEAUTY</span><span className="brand-slogan">Brilla con tu propio estilo</span></>}
  </div>
}
