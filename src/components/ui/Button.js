import React from 'react';

export const Button = ({ children, href, className = "", ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        className={`inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-sm transition duration-200 ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-sm transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
