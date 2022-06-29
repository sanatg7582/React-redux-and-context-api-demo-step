import React, { useState } from 'react';
import CounterContext from './contextApi';

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncreseCounter = () => {
    setCount(count + 1);
  };
  const handleDecreseCounter = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider
      value={{ count, handleIncreseCounter, handleDecreseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default ContextProvider;
