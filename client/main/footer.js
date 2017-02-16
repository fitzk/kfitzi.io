import React from "react";
import logo from "./../assets/images/logo/logo_transparent_background.png";
import styled, { css } from "styled-components";
import { Column } from "styled-flex";
import { NavAwayBlack, RowColumn } from "components";
import { media } from "components/media";
import { Links } from "./links"

const FooterContainer = styled(RowColumn)`
	background-color: ${ props => props.theme.palette.primary1Color };
	font-family: Roboto, sans-serif;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
	color: black;
	margin: 0;
	width: 100%;
	padding: .5em;
	height: 25vh;
`;

const base = css`
	height: 20vh;
	margin: 16px;
	width: 30vw;
`;

const LogoContainer = styled(Column)`
	${ base }
`;

const Logo = styled.img`
	height: 10em;
`;

const CopyContainer = styled(Column)`
 ${ base }
`;

const LinksContainer = styled(Column)`
	${ base }
`;

const LinksWrapper = styled.div`
	width: 7vw;
`;

export const Footer = props => {
	return <FooterContainer alignCenter justifySpaceBetween>
          <LogoContainer alignStart justifyEnd>
            <Logo src={ logo } />
          </LogoContainer>
      		<CopyContainer alignCenter justifyEnd>
            © 2016-present Kayla Fitzsimmons
          </CopyContainer>
					<LinksContainer alignCenter justifyEnd>
						<LinksWrapper>
							<Links row/>
						</LinksWrapper>
					</LinksContainer>
        </FooterContainer>
}
