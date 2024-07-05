type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunctionalComponents = ({ count, setCount }: TProps) => {
  return (
    <div>
      <h2>Functional button</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};

export default CounterWithFunctionalComponents;
