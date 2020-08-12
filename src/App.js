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
//Lifecycle hooks can be used only in class compoent
    // LifeCycle Hooks Mounting Phase start
    constructor() {
        super(); //calling constructor of parent class
        console.log("App-constructor"); //Constructor is called only one time when instance of class is created and in this properties can be initialise
        // setState() cant be used in constructor bcoz it is used only when a compoennt is rendered and placed on DOM not before its rendering
        //To use or set state in constructor using props so first props need to be passed as arg in constructor(props) and super(props) or else error occur
        //this.state=this.props.abc;
    }

    componentDidMount() {
        //Called After compoent is rendered into DOM and it can be used to make AJAX  call to fetch data
        //AJAX Call
        // this.setState({respdata});
        console.log("App -Mounted ");
    }

    //Heirarchy of Mounting phase is constructor -> Render -> componentDidMount
    //Mounting Phase Ended

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
        console.log(" Mounting Phase render---");
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
