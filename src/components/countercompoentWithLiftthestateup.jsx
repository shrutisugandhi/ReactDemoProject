import React, { Component } from "react";
class CounterComponentWithLiftStateUp extends Component {
    componentDidUpdate(prevProps, prevState) {
        //Update Lifecycle hooks
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        // if(prevProps.counterAttr.value !==this.props.counterAttr.value){
        //     //New Ajax call can be made
        // }
    }

    //Unmount phase of lifecycle hooks
    componentWillUnmount(){
        console.log("UnMounting phase");
    }
    render() {
        console.log("CounterComponentWithLiftStateUp Mounting Phase- Rendered");

        // let countClasses = this.getBadgeClasses();
        //  console.log("CounterComponentWithLiftStateUp", this.props);
        return (
            <div>
                <span>props {this.props.children} </span>
                <span>
                    <button
                        type="button"
                        onClick={() =>
                            this.props.onIncrement(this.props.counterAttr)
                        }
                        className="btn btn-success btn-sm m-2"
                    >
                        +
                    </button>
                </span>
                {/* <img src={this.state.imageUrl} alt="random images"></img> */}
                {/* <span className={countClasses}>{this.formatCount()}</span> */}

                <span className={this.getBadgeClasses()}>
                    {this.getCountValue()}
                </span>

                <span>
                    <button
                        type="button"
                        onClick={() =>
                            this.props.onDecrement(this.props.counterAttr)
                        }
                        className="btn btn-success btn-sm"
                    >
                        -
                    </button>
                </span>
                <span>
                    <button
                        type="button"
                        onClick={() =>
                            this.props.onDelete(this.props.counterAttr)
                        }
                        className="btn btn-danger btn-sm m-2"
                    >
                        Delete
                    </button>
                </span>
                {/*-----Rendering array conditionally on lenfth of array  */}
                {/* {this.state.tags.length === 0 && "Please create new tags"} */}
                {/* {this.renderTagsArray()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let countClasses = "badge m-4  badge-"; //Dynamic classes rendering on basis of countValue
        countClasses +=
            this.props.counterAttr.value <= 0 ? "warning" : "primary";
        return countClasses;
    }

    getCountValue() {
        const { value } = this.props.counterAttr; //object destructuring of picking countval from state obj
        //console.log(value);
        return value === 0 ? "0" : value;
    }
}

export default CounterComponentWithLiftStateUp;
