import React, { Component } from "react";
import Counter from "./countercomponent";
class CounterList extends Component {
  state = {
    counterslistArr: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  deleteCounter = (counterarrId) => {
    console.log("delete counter called", counterarrId);
    var arraylist = this.state.counterslistArr.filter(
      (c) => c.id !== counterarrId
    );
    this.setState({ counterslistArr: arraylist });
  };
  render() {
    console.log(this.state.counterslistArr.length);

    return (
      <React.Fragment>
        {this.state.counterslistArr.map((counterarr, index) => (
          <span>
            Index :{index}{" "}
            <Counter
              key={counterarr.id}
              value={counterarr.value}
              id={counterarr.id}
              onDelete={this.deleteCounter}
            >
              <span>Counter Id #{counterarr.id}</span>
            </Counter>
          </span>
        ))}
      </React.Fragment>
    );
  }
}

export default CounterList;
