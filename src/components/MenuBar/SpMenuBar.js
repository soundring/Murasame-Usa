import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SpBar = styled("div")`
  @media only screen and (min-width: 750px) {
    position: fixed;
  }
`;

const Bar = styled(AppBar)`
  && {
    background-color: rgba(206, 206, 206, 0.8);
  }
`;

const FixToolbar = styled(Toolbar)`
  && {
    padding: 0;
  }
`;

const MenuTitle = styled(AnchorLink)`
  && {
    color: #fff;
    font-size: 22px;
    text-decoration: none;
  }
`;

const DrawerMain = styled(Drawer)`
  && {
    > div {
      background-color: rgba(206, 206, 206, 0.9);
    }
  }
`;

const DrawerHeader = styled("div")`
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: "flex-end";
`;

const MenuButton = styled(AnchorLink)`
  && {
    color: black;
    font-size: 16px;
    text-decoration: none;
    padding: 20px 20px;
  }
`;

class SpMenuBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <SpBar>
        <Bar>
          <FixToolbar>
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <MenuTitle href="#top">Murasame Usa</MenuTitle>
            </Toolbar>
          </FixToolbar>
        </Bar>
        <DrawerMain anchor="left" open={open}>
          <DrawerHeader>
            <IconButton onClick={this.handleDrawerClose}>×</IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem>
              <MenuButton
                href="#top"
                offset="64"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                Top
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                href="#intro"
                offset="56"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                Introduction
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                href="#product"
                offset="56"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                Product
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                href="#skill"
                offset="56"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                Skill
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                href="#contact"
                offset="54"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                Contact
              </MenuButton>
            </ListItem>
          </List>
        </DrawerMain>
      </SpBar>
    );
  }
}

export default SpMenuBar;
