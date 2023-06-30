import React, { useState } from "react";

import { Collapse,
      Navbar,
      NavbarToggler, 
      NavbarBrand, 
      Nav, 
      NavItem, 
      NavLink 
    } from "reactstrap";

const CostumNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="custom-nav">
        <Navbar color="#c0c0c0" light expand="md">
            <NavbarBrand href="/" className="mr-auto">
            Pokémon API     |     Strapi API Authentication
            </NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="/logout">
                    Logout
                    </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        </div>
    );
};

export default CostumNav;