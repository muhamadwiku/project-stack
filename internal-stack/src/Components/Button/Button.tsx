"use client"

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  const handleClick = () => {
    alert('hello from child');
  };

  return (
    <button
      className="bg-secondary-color py-4 px-14 rounded text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};


export default Button;