import React, { Component } from "react";

interface HeaderProps {
  logedin?: boolean;
  name?: string;
}

class Header extends Component<HeaderProps> {
  render() {
    const logedin = this.props.logedin ? this.props.logedin : true;
    const name = this.props.name ? this.props.name : "Michael";

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AllOps
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                {logedin && name ? (
                  <div className="navbar-text me-2">{name}</div>
                ) : null}
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-md btn-outline-secondary me-2"
                  type="button"
                >
                  {logedin ? "Logout " : "Login"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
