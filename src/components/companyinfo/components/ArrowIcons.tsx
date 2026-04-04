// src/components/products/components/ArrowIcons.tsx
import React from 'react';

interface ArrowIconProps {
  isDisabled?: boolean;
}

export const PrevArrowIcon: React.FC<ArrowIconProps> = ({ isDisabled = false }) => (
  <svg 
    width="22" 
    height="41" 
    viewBox="0 0 22 41" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20.7071 0.353516L0.707092 20.3535L20.7071 40.3535" 
      stroke={isDisabled ? "#8F8F8F" : "black"}
    />
    <path 
      d="M20.7071 0.353516L0.707092 20.3535L20.7071 40.3535" 
      stroke={isDisabled ? "#8F8F8F" : "black"}
    />
  </svg>
);

export const NextArrowIcon: React.FC<ArrowIconProps> = ({ isDisabled = false }) => (
  <svg 
    width="22" 
    height="41" 
    viewBox="0 0 22 41" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0.353577 0.353516L20.3536 20.3535L0.353577 40.3535" 
      stroke={isDisabled ? "#8F8F8F" : "black"}
    />
    <path 
      d="M0.353577 0.353516L20.3536 20.3535L0.353577 40.3535" 
      stroke={isDisabled ? "#8F8F8F" : "black"}
    />
  </svg>
);