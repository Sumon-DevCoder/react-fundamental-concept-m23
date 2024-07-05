import React from "react";

interface CounterWithClassComponentsProps {}

interface CounterWithClassComponentsState {
  count: number;
}

class CounterWithClassComponents extends React.Component<
  CounterWithClassComponentsProps,
  CounterWithClassComponentsState
> {
  constructor(props: CounterWithClassComponentsProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Class Component Counter</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </button>
      </div>
    );
  }
}

export default CounterWithClassComponents;
