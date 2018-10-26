import React from "react";
//import "./dropdownoffer.css";

class Dropdownoffer extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown1">
        <div
          className="dropdown1-button"
          onClick={this.showDropdownMenu}
          large={false}
        >
          Offer
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Eye">
                Eye
              </a>
            </li>
            <li>
              <a href="#Face">Face</a>
            </li>
            <li>
              <a href="#Cheek">Cheek</a>
            </li>
            <li>
              <a href="#Lip">Lip</a>
            </li>
            <li>
              <a href="#Accessories">Accessories</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdownoffer;
