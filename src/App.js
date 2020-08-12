import React, { Component } from "react";
// import logo from './logo.svg';
// import Home from './home';
// import Counter from './components/countercomponent';
// import CounterList from './components/countersList';
import NavBar from "./components/navBar";
//import CounterListExtnd from "./components/counterListWithcommonState";
import CounterListWithLiftStateup from "./components/counterListWithLiftTheStateUp";
class App extends Component {
    state = {
        counterslistArr: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
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
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Counter Increment Demo</h1>
                    <NavBar
                        totalCount={
                            this.state.counterslistArr.filter(
                                (c) => c.value > 0
                            ).length
                        }
                    />
                    <main className="container">
                        {/* <CounterListExtnd/> */}
                        <CounterListWithLiftStateup
                            onAppIncrement={this.handleIncrement}
                            onAppDelete={this.deleteCounter}
                            onAppReset={this.resetCounter}
                            onAppDecrement={this.handleDecrement}
                            counterProps={this.state.counterslistArr}
                        />
                        {/* Parent component is CounterListExtend Its child is Counterextend */}
                        {/* Parent to child data is accessed in child using props and child to parent data is accessed in parent using event handling */}
                    </main>
                    {/* <Counter/> */}
                    {/* <CounterList/> */}
                </header>
            </div>
        );
    }
}

export default App;
