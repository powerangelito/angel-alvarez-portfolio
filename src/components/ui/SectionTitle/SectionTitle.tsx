import type { PropsWithChildren } from 'react';
import { cn } from '../../../lib/utils';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('mb-12 text-center text-4xl font-bold', className)}>
      {children}
    </h2>
  );
}
