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
  resetCounter=()=>{
    const resetCount=this.state.counterslistArr.map(c=>{
      c.value=0;
      return c;
    })
    this.setState({counterslistArr:resetCount})
  }
  render() {
    console.log(this.state.counterslistArr.length);

    return (
      <React.Fragment>
    <button className="btn btn-primary btn-sm m-2" onClick={this.resetCounter}>ResetCounter</button>
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
