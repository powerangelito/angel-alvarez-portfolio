import type { PropsWithChildren } from 'react';
import { cn } from '../../../lib/utils';

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-blue-500',
        className,
      )}
    >
      {children}
    </span>
  );
}
