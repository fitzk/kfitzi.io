import React from "react";
import {Drawer} from "material-ui";
import "styles/index.scss";
import Menu from "./menu/menu";


const DrawerComponent = props => {

    return (

        <Drawer
            zDepth={0}
            open={props.open}
            docked={false}
            overlayStyle={{ backgroundColor: 'black', opacity: '.2' }}
            containerClassName="drawer">
            <Menu click={ props.click }/>
        </Drawer>
    );
};
export default DrawerComponent;
