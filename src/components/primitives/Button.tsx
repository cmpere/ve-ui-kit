import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { LoaderCircle } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'destructive'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; loading?: boolean; fullWidth?: boolean; iconLeft?: ReactNode; iconRight?: ReactNode }
export function Button({ variant = 'primary', loading, fullWidth, iconLeft, iconRight, className = '', children, disabled, ...props }: Props) {
  return <button className={`button button-${variant} ${fullWidth ? 'full' : ''} ${className}`} disabled={disabled || loading} {...props}>
    {loading ? <LoaderCircle className="spin" size={16} aria-hidden="true" /> : iconLeft}{children}{!loading && iconRight}
  </button>
}
