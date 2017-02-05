import React, { Component } from "react"
import { Drawer } from "material-ui"
import { Link } from "react-router"
import { Column, H2 } from "components"


const MaterialDrawer = ({open, updateDrawerState}) => {
	let linkStyle = {
		margin: ".5em",
		fontSize: "1rem",
		textDecoration: "none",
		color: "black",
		fontFamily: "Roboto, sans-serif"
	}
	return <Drawer open={ open }
                style={ { padding: ".5em" } }
                openSecondary={ true }>
          <Column style={ { margin: "3em" } }
                  alignCenter
                  justifyCenter>
            <Column alignStart
                    justifyStart>
              <Link onClick={ updateDrawerState }
                    style={ linkStyle }
                    to="/">
              <H2 children="home" />
              </Link>
              <Link onClick={ updateDrawerState }
                    style={ linkStyle }
                    to="/projects">
              <H2 children="projects" />
              </Link>
            </Column>
          </Column>
        </Drawer>
}

export { MaterialDrawer }
