import React from "react"
import logo from "./../assets/images/logo/logo_transparent_background.png"
import styled from "styled-components"
import { RowColumn, Column } from "components"
import { media } from "components/media"

const FooterContainer = styled(RowColumn)`
	background-color: ${ props => props.theme.palette.primary1Color };
	font-family: Roboto, sans-serif;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
	color: white;
	margin: 0;
	width: 100%;
	${ media.iphone6`max-height: 250px;` }
	padding: .5em;
`;

const LogoContainer = styled(Column)`
	margin: 2px;
`;

const Logo = styled.img`
	height: 10vh;
`;

const CopyContainer = styled(Column)`
	height: 10vh;
	margin: 16px;
`;

export const Footer = props => {
	return <FooterContainer alignCenter justifySpaceBetween>
          <LogoContainer>
            <Logo src={ logo } />
          </LogoContainer>
      		<CopyContainer alignEnd justifyEnd>
            © 2016-present Kayla Fitzsimmons
          </CopyContainer>
        </FooterContainer>
}
