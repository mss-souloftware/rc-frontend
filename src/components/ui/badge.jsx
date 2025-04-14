import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, children, ...props }) {
    return (
        <div
            className={cn(
                'inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
