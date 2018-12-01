import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
    position: fixed;
    background-color: rgba(206, 206, 206, 0.8);
  }
`;

const MenuTitle = styled(AnchorLink)`
  && {
    color: white;
    font-size: 32px;
    text-decoration: none;
    :hover {
      color: black;
    }
  }
`;

const MenuButton = styled(AnchorLink)`
  && {
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    margin-left: 30px;
    :hover {
      color: black;
    }
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
        <Bar>
          <Toolbar>
            <MenuTitle href="#top">Murasame Usa</MenuTitle>
            <div className={classes.grow}>
              <MenuButton href="#intro" offset="64">
                Introduction
              </MenuButton>
              <MenuButton href="#product" offset="63">
                Product
              </MenuButton>
              <MenuButton href="#skill" offset="63">
                Skill
              </MenuButton>
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
