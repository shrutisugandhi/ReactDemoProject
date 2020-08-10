import React, { Component } from "react";
class Counter extends Component {
  state = {
    countVal: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  //Method 1 : use of constructor,super(),bind() to access 'this'
  //   //   Initially we dont have access to state object 'this' in increment method so using constructor and bind method
  //   constructor() {
  //     super(); //super() is used because we dont get 'this' value in constructor if super() is not used
  //     console.log("this constructor", this);
  //   this.incrementCount= this.incrementCount.bind(this); //bind method is attached to our incrementCount method
  //   }

  //Method 2: use of arrow function
//   incrementCount = () => {
//     //this.state.countVal += 1;
//     this.setState({ countVal: this.state.countVal + 1 }); //To update state value of counter we have to use setState(objname) method
//     console.log("increment clicked", this.state.countVal);
//   };
  incrementCount=productid=>{
    //this.state.countVal += 1;
    this.setState({ countVal: this.state.countVal + 1 }); //To update state value of counter we have to use setState(objname) method
    console.log("increment clicked", this.state.countVal);
   console.log("productid",productid);
  }
  decrementCount = () => {
    this.state.countVal -= 1;
    this.setState(this.state);
    console.log("decrement value", this.state.countVal);
  };
  styles = {
    fontSize: 16,
    fontWeight: "bold",
  };

  renderTagsArray() {
    if (this.state.tags.length === 0) return null;

    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index} value={tag}>
            {index}-{tag}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    let countClasses = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span>
          <button
            style={this.styles}
            type="button"
            // onClick={this.incrementCount}
            onClick={()=>this.incrementCount({id:1})}
            className="btn btn-success btn-sm"
          >
            +
          </button>
        </span>
        {/* <img src={this.state.imageUrl} alt="random images"></img> */}
        {/* <span className={countClasses}>{this.formatCount()}</span> */}
       
        <span className={this.getBadgeClasses()}>{this.getCountValue()}</span>

        <span>
          <button
            style={this.styles}
            type="button"
            onClick={this.decrementCount}
            className="btn btn-success btn-sm"
          >
            -
          </button>
        </span>
        {/*-----Rendering array conditionally on lenfth of array  */}
        {this.state.tags.length === 0 && "Please create new tags"}
        {this.renderTagsArray()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let countClasses = "badge m-2 badge-"; //Dynamic classes rendering on basis of countValue
    countClasses += this.state.countVal <= 0 ? "warning" : "primary";
    return countClasses;
  }

  getCountValue() {
    const { countVal } = this.state; //object destructuring of picking countval from state obj
    return countVal === 0 ? "0" : countVal;
  }
}

export default Counter;
