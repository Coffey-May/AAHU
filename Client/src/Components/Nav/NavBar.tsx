import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";
import { Spin as Hamburger } from "hamburger-react";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth/LogoutButton";
import LoginButton from "../Auth/LoginButton";
import Profile from "../Auth/Profile";
import { Button } from "@material-ui/core";
import logi3 from "../../assets/logi3.png";
import { NavLink } from "react-router-dom";
import Container from "@material-ui/core/Container";

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const classes = useStyles();
  const { isLoading } = useAuth0();

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  let wide: string | undefined;
  isOpen ? (wide = classes.navDisplaySmall) : (wide = classes.navDisplay);

  const NavItems = () => {
    const { user } = useAuth0();
    const navLinks = document.querySelectorAll("li");
    navLinks.forEach((elem) => console.log(elem));

    return (
      <ul className={wide}>
        <li>
          <Button color="inherit">
            <h3>
              <Profile />
            </h3>
          </Button>
        </li>

        <li>
          <Button href="/#About" color="inherit">
            <h3> ABOUT</h3>
          </Button>
        </li>

        <li>
          <Button href="/#Projects" color="inherit">
            <h3> PROJECTS</h3>
          </Button>
        </li>
        {user ? (
          <li>
            <LogoutButton />
          </li>
        ) : (
          <li>
            <LoginButton />
          </li>
        )}
      </ul>
    );
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <HideOnScroll>
      <AppBar className={classes.nav}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              href="/#Home"
            >
              <img style={{ height: "60px" }} src={`${logi3}`} alt="" />
            </IconButton>

            {!isOpen ? <NavItems /> : null}
            <Box onClick={() => setIsOpen(!isOpen)} className={classes.burger}>
              <Hamburger />
            </Box>
          </Toolbar>
          {isOpen ? <NavItems /> : null}
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
