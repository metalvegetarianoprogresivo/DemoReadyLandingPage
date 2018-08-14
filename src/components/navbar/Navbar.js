import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Col, Icon } from 'react-materialize';
import Sidenav from '../../components/sidenav/sidenav'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isMenuOpen : false
    }
    // this.renderSideNav = this.renderSideNav.bind(this);
  }

//   componentDidMount() {
//     if (typeof $ !== 'undefined') {
//       $('.button-collapse').sideNav(this.props.options);
//     }
//   }

//   renderSideNav() {
//     return (
//       <ul id="nav-mobile" className="side-nav">
//         {this.props.children}
//       </ul>
//     );
//   }

  toggle = () => {
    this.setState({ isMenuOpen : !this.state.isMenuOpen })
  }

  render() {
    const { brand, className, fixed, left, right, href, ...other } = this.props;
    console.log(className)
    delete other.options;

    let classes = {
      right: right
     // 'hide-on-med-and-down': true
    };

    let brandClasses = {
      'brand-logo': true,
      right: left
    };

    let content = (
        
      <nav {...other} className={'navbar_intersys'}>
        <div className="row">
          <Col s={12}>
            <div onClick={ this.toggle } className="waves-effect waves-teal btn-flat"><Icon>menu</Icon></div>
            <a href={href} className="intersys-logo">
              {brand}
            </a>
            <ul className="navbar_intersys-menu">{this.props.children}</ul>
          </Col>
        </div>
        <Sidenav isOpen = {this.state.isMenuOpen} toggle={this.toggle} />
      </nav>
    );

    if (fixed) {
      content = <div className="navbar-fixed">{content}</div>;
    }
    return content;
  }
}

Navbar.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  href: PropTypes.string,
  fixed: PropTypes.bool,
  options: PropTypes.shape({
    menuWidth: PropTypes.number,
    edge: PropTypes.oneOf(['left', 'right']),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool
  })
};

Navbar.defaultProps = {
  href: '/',
  options: {}
};

export default Navbar;