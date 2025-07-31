import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  let base =
    'px-6 py-3 rounded-xl font-bold text-lg font-sans transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400';
  let color = '';
  if (variant === 'primary') {
    color = 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-md';
  } else if (variant === 'secondary') {
    color = 'bg-purple-100 text-purple-700 hover:bg-purple-200';
  } else if (variant === 'outline') {
    color = 'bg-white border-2 border-purple-400 text-purple-700 hover:bg-purple-50';
  }
  return (
    <button
      className={`${base} ${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}