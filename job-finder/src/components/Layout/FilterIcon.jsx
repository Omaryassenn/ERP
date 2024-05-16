import React from 'react';

const FilterIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d="M21 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zM6 10h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm-3 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
    </svg>
  );
};

export default FilterIcon;
