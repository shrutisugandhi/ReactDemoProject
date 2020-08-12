import React, { Component } from "react";

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
