import React, { Component } from "react";
// import React from 'react';
//Stateless Functional compoents if we dont have state in class and we are accessing data through props
// const Navbar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-primary">
//             <form className="form-inline">
//                 <button className="btn btn-success" type="button">
//                     Total Products{" "}
//                     <span className="badge-pill badge-secondary">
//                         {props.totalCount}
//                     </span>
//                 </button>
//             </form>
//         </nav>
//     );
// };

// export default Navbar;
// Class
class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-light bg-primary">
                <form className="form-inline">
                    <button className="btn btn-success" type="button">
                        Total Products{" "}
                        <span className="badge-pill badge-secondary">
                            {this.props.totalCount}
                        </span>
                    </button>
                </form>
            </nav>
        );
    }
}

export default NavBar;
