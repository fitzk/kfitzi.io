import React, { Component } from "react"
import { Drawer } from "material-ui"
import { Link } from "react-router"
import { Column } from "components"


const MaterialDrawer = ({open, updateDrawerState}) => {
	let linkStyle = {
		margin: "5px",
		fontSize: "1.5rem",
		textDecoration: "none",
		color: "black",
		fontFamily: "Roboto, Sans-serif"
	}
	return <Drawer open={ open }
                openSecondary={ true }>
          <Column style={ { maringTop: "10px" } }
                  alignCenter
                  justifyStart>
            ♡
            <Column alignStart
                    justifyStart>
              <Link onClick={ updateDrawerState }
                    style={ linkStyle }
                    to="/"> about
              </Link>
              <Link onClick={ updateDrawerState }
                    style={ linkStyle }
                    to="/activity"> activity
              </Link>
              <Link onClick={ updateDrawerState }
                    style={ linkStyle }
                    to="/projects"> projects
              </Link>
            </Column>
          </Column>
        </Drawer>
}


export { MaterialDrawer }
