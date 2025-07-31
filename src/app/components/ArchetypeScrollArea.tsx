import React from 'react';

interface ArchetypeScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArchetypeScrollArea({ children, className = '' }: ArchetypeScrollAreaProps) {
  return (
    <div className={`overflow-x-auto pb-4 ${className}`}>
      <div className="flex gap-6 px-2 md:px-8" style={{ WebkitOverflowScrolling: 'touch' }}>
        {children}
      </div>
    </div>
  );
}