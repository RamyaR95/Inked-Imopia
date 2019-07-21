import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

  render() {
      return(
          <div>
              <Navbar dark expand="md">
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                      <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>Survey Us</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/Registerus'><span className="fa fa-address-card fa-lg"></span> Register</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> FeedBack</NavLink>
                          </NavItem>
                          </Nav>
                      </Collapse>
                  </div>
              </Navbar>
              <Jumbotron>
                  <div className="container">
                      <div className="row row-header">
                          <div className="col-12 col-sm-6">
                              <h1>Inked Promoipa</h1>
                              <p>One Stop shop to all your printing & advertising needs, covering various sectors of Business products,in-house printing – Inking your personalized memories on photo gifts, mugs, T-Shirt, stationary items.!!</p>
                          </div>
                      </div>
                  </div>
              </Jumbotron>
          </div>
      );
  }
}

export default Header;