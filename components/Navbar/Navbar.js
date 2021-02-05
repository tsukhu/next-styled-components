import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon
} from "./Navbar.elements";
import Link from "next/link";
const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider
        value={{
          color: "#fff"
        }}
      >
        <Nav>
          <NavbarContainer>
            <Link href="/" passHref>
              <>
                <NavLogo>
                  <NavIcon />
                  ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
              </>
            </Link>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
