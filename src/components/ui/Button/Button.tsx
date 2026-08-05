import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl px-6 py-3 font-medium transition-all duration-300',

        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-500',

        variant === 'secondary' &&
          'border border-zinc-700 bg-transparent hover:border-blue-500',

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
