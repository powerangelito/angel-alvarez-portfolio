import type { PropsWithChildren } from 'react';
import { cn } from '../../../lib/utils';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all duration-300 hover:border-blue-500',
        className,
      )}
    >
      {children}
    </div>
  );
}
