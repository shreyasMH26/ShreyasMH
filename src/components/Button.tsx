import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium text-sm md:text-base transition-all duration-200 cursor-pointer select-none active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none';

  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles =
      'bg-[#051A24] text-white rounded-full px-7 py-3 shadow-primary-btn hover:-translate-y-0.5 active:translate-y-0 hover:bg-[#072433]';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-white text-[#051A24] rounded-full px-7 py-3 shadow-secondary-btn hover:-translate-y-0.5 active:translate-y-0 hover:bg-zinc-50';
  } else if (variant === 'tertiary') {
    variantStyles =
      'bg-white text-[#051A24] rounded-full px-6 py-2.5 shadow-tertiary-btn hover:-translate-y-0.5 active:translate-y-0 hover:bg-zinc-50';
  }

  const combinedClass = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
}
