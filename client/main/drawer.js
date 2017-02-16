import React, { Component } from "react"
import { Drawer } from "material-ui"
import { Link } from "react-router"
import { Column } from "styled-flex"
import { H2 } from "components"
import styled from "styled-components"

const StyledLink = styled(Link)`
	margin: .5em;
	fontSize: .75rem;
	text-decoration: none;
	color: black;
	font-family: Roboto, sans-serif;
`;

const StyledDrawer = styled(Drawer)`
	padding: .25em;
`;

const Container = styled(Column)`
	margin: 1em;
`;

const MaterialDrawer = ({ open, updateDrawerState }) => {

	return <StyledDrawer open={ open }
                			openSecondary={ true }>
          <Container alignStart justifyCenter>
              <StyledLink onClick={ updateDrawerState } to="/projects">
              	<H2 children="projects" />
							</StyledLink>
							<StyledLink onClick={ updateDrawerState } to="/activity">
								<H2 children="latest gists" />
							</StyledLink>
          </Container>
        </StyledDrawer>
}

export { MaterialDrawer }
