import React, { forwardRef } from 'react';

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <input
    type="text"
    value={value}
    onClick={onClick}
    ref={ref}
    className="datepicker-input"
    placeholder="DD/MM/YYYY" 
  />
));

export default CustomDateInput;
