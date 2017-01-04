import React from "react";
import { AppBar, FontIcon, List, ListItem } from "material-ui";
import { browserHistory } from "react-router";
// import "styles/index.scss";
import NotebookMenuItem from "./notebook-menu-item";

const Menu = props => {
  const select = (uri) => {
    props.click();
    browserHistory.push(uri);
  };
  let color = "white";
  return (<div>
        <AppBar zDepth={0}
    showMenuIconButton={false}
    style={{
      backgroundColor: 'transparent'
    }}
    className="drawer-bar"/>

        <List className="menu-items">
            <ListItem className="menu-item"
    leftIcon={
    <FontIcon color={color}>
                              <i className="fa fa-user"/>
                          </FontIcon>
    }
    onTouchTap={() => select('/about')}
    primaryText={'about'}/>

            <NotebookMenuItem select={(uri) => select(uri)}/>

            <ListItem className="menu-item"
    primaryText={'blog'}
    onTouchTap={() => select('/blog')}
    leftIcon={
    <FontIcon color={color}>
                              <i className="fa fa-rss fa-fw"/>
                          </FontIcon>
    }/>
            <ListItem className="menu-item"
    primaryText={'projects'}
    nestedLevel={0}
    onTouchTap={() => select('/projects')}
    leftIcon={
    <FontIcon color={color}>
                              <i className="fa fa-terminal fa-fw"/>
                          </FontIcon>
    }/>
        </List>
    </div>);
};


export default Menu;
