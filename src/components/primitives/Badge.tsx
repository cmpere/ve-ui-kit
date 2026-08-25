type BadgeKind = 'new' | 'sale' | 'featured' | 'limited' | 'order' | 'out'
const labels: Record<BadgeKind, string> = { new: 'Nuevo', sale: 'Oferta', featured: 'Destacado', limited: 'Edición limitada', order: 'Sobre pedido', out: 'Agotado' }
export function Badge({ kind, children }: { kind: BadgeKind; children?: string }) { return <span className={`badge badge-${kind}`}>{children ?? labels[kind]}</span> }
