import React, { Component } from "react";
// import Counter from "./countercomponent";
import Counterextend from "./counterComponentWithoutLocalState";
class CounterListExtnd extends Component {
    state = {
        counterslistArr: [
            { id: 1, value: 2 },
            { id: 2, value: 1 },
            { id: 3, value: 4 },
            { id: 4, value: 3 },
        ],
    };
    handleIncrement = (cnt) => {
        console.log("cnt", cnt);
        const arr = [...this.state.counterslistArr];
        const arrIndex = arr.indexOf(cnt);
        console.log("arrIndex", arrIndex);
        arr[arrIndex] = { ...cnt };
        console.log("---", arr[arrIndex]);
        arr[arrIndex].value++;
        this.setState({ counterslistArr: arr });
    };
    handleDecrement = (cnt) => {
        console.log("cnt", cnt);
        const arr = [...this.state.counterslistArr];
        const arrIndex = arr.indexOf(cnt);
        console.log("arrIndex", arrIndex);
        arr[arrIndex] = { ...cnt };
        console.log("---", arr[arrIndex]);
        arr[arrIndex].value--;
        this.setState({ counterslistArr: arr });
    };
    deleteCounter = (counterarrId) => {
        console.log("delete counter called", counterarrId.id);
        // filter method for deleting data on based of value is used to call all values in array accept the "id" paased as argument to delete its data
        var arraylist = this.state.counterslistArr.filter(
            (c) => c.id !== counterarrId.id
        );
        this.setState({ counterslistArr: arraylist });
    };
    resetCounter = () => {
        const resetCount = this.state.counterslistArr.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counterslistArr: resetCount });
    };
    render() {
        // console.log(this.state.counterslistArr.length);

        return (
            <React.Fragment>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.resetCounter}
                >
                    ResetCounter
                </button>
                {this.state.counterslistArr.map((counterarr, index) => (
                    <span>
                        Index :{index}{" "}
                        {/* Here After iterating "counterslistArr" through "map" it is passed into child component as attr prop (counterAttr) and this is accessed in child using props */}
                        <Counterextend
                            //   key={counterarr.id}
                            //   value={counterarr.value}
                            //   id={counterarr.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.deleteCounter}
                            counterAttr={counterarr} //alternative use of key,id,value to use counterarr obj values
                        >
                            <span>Counter Id #{counterarr.id}</span>
                        </Counterextend>
                    </span>
                ))}
            </React.Fragment>
        );
    }
}

export default CounterListExtnd;
