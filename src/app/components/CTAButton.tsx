import React from 'react';

type CTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const CTAButton = ({ children, onClick, className = '' }: CTAButtonProps) => (
  <button
    onClick={onClick}
    className={`premium-button ${className}`}
  >
    {children}
  </button>
);

export default CTAButton; 