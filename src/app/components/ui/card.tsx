import React, { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-3xl bg-white shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = 'Card';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';