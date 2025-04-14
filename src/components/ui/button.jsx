import React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-small transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
      default: 'bg-green-600 text-white hover:bg-green-700',
      ghost: 'bg-transparent hover:bg-gray-100 text-white',
      grayTrans: 'bg-gray-400 hover:bg-green-600 text-white rounded-full',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';