import React from 'react';

const Button = ({ onClick, color = 'bg-blue-700', hoverColor = 'hover:bg-blue-900', textColor = 'text-white', paddingX = 'px-3', paddingY = 'py-2',  textFont= 'text-sm', borderRaduis = 'rounded-3xl', children }) => {
  return (
    <button
      className={`${color} ${hoverColor} ${textColor} ${paddingX} ${paddingY} ${textFont} ${borderRaduis}  cursor-pointer text-sm font-semibold transition ease-in-out duration-200`}
      onClick={onClick}    
    >
      {children}
    </button>
  );
};

export default Button;