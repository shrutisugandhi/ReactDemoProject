import React, { Component } from "react";
// import Counter from "./countercomponent";
//import Counterextend from "./counterComponentWithoutLocalState";
import CounterComponentWithLiftStateUp from "./countercompoentWithLiftthestateup";
class CounterListWithLiftStateup extends Component {
    render() {
        console.log("CounterListWithLiftStateup Mounting Phase - Rendered");
        // console.log(this.state.counterslistArr.length);
        const { //This is object argument destructuring in order to make code clean and to avoid large heirarchy in this.props to access value or events
            onAppReset,
            counterProps,
            onAppDecrement,
            onAppIncrement,
        } = this.props;  //This is object argument destructuring in order to make code clean and to avoid large heirarchy in this.props to access value or events
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary btn-sm m-2"
                   // onClick={this.props.onAppReset}
                    onClick={onAppReset} //Example of Object destructuring by skipping this.props and declare it in line number 8
                >
                    ResetCounter
                </button>
                {this.props.counterProps.map((counterarr, index) => (
                    <span>
                        Index :{index}{" "}
                        {/* Here After iterating "counterslistArr" through "map" it is passed into child component as attr prop (counterAttr) and this is accessed in child using props */}
                        <CounterComponentWithLiftStateUp
                            //   key={counterarr.id}
                            //   value={counterarr.value}
                            //   id={counterarr.id}
                            onIncrement={this.props.onAppIncrement}
                            onDecrement={this.props.onAppDecrement}
                            onDelete={this.props.onAppDelete}
                            counterAttr={counterarr} //alternative use of key,id,value to use counterarr obj values
                        >
                            <span>Counter Id #{counterarr.id}</span>
                        </CounterComponentWithLiftStateUp>
                    </span>
                ))}
            </React.Fragment>
        );
    }
}

export default CounterListWithLiftStateup;
