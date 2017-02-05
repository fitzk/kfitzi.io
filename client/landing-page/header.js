import React, { Component } from "react"
import { AppBar } from "material-ui"
import { Link } from "react-router"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import { scroll } from "utils"
import { Row, Column, RowColumn, H1, H2, ProfileImage } from "components"
import { Drawer } from "./drawer"
import me from "./../assets/images/me.jpg"
import { Links } from "./links"

/* esfmt-ignore-start */
export const Header = styled(Row)`
	flex-shrink: 0;
`
export const NameContainer= styled(Column)`

`
	/* esfmt-ignore-end */

const LandingPageHeader = props => {

	return <Header>
          <ProfileImage src={ me } />
          <NameContainer alignStart>
            { /* esfmt-ignore-start */ }
									<H1>kayla</H1>
									<H1>fitzsimmons</H1>
									<H2>frontend developer </H2>
									<Links/>
 							{ /* esfmt-ignore-end */ }
          </NameContainer>
        </Header>
}

export { LandingPageHeader }
