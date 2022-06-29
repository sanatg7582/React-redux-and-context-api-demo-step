import { useContext } from 'react';
import CounterContext from './contextApi';

const Page2 = () => {
  const { count, handleDecreseCounter, handleIncreseCounter } =
    useContext(CounterContext);

  return (
    <div>
      <h1>With Context API</h1>
      <h1>{count}</h1>
      <button onClick={handleIncreseCounter}>increment</button>
      <button onClick={handleDecreseCounter}>decrease</button>
    </div>
  );
};
export default Page2;
