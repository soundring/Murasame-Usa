import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "right"
  }
};

const Bar = styled(AppBar)`
  && {
    background-color: rgba(206, 206, 206, 0.5);
  }
`;

const MenuTitle = styled(AnchorLink)`
  && {
    color: white;
    font-size: 32px;
    text-decoration: none;
  }
`;

const MenuButton = styled(AnchorLink)`
  && {
    color: white;
    font-size: 20px;
    text-decoration: none;
    margin-left: 30px;
  }
`;

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Bar position="fixed">
          <Toolbar>
            <MenuTitle href="#top">Murasame Usa</MenuTitle>
            <div className={classes.grow}>
              <MenuButton href="#intro" offset="64">
                Introduction
              </MenuButton>

              <MenuButton href="#skill">Skill</MenuButton>
              <MenuButton href="#contact" offset="65">
                Contact
              </MenuButton>
            </div>
          </Toolbar>
        </Bar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
