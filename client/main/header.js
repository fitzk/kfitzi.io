import React from "react";
import styled from "styled-components";
import { H1, H2 } from "components";
import {  Row, Column } from "styled-flex";
import { Links } from "./links";

const Header = styled(Row)`
	flex-shrink: 2;
	margin-top: 1em;
  margin-bottom: 1em;
`;

const SiteTitle = styled(H1)`
	font-size: 4rem;
`;

const LandingPageHeader = props => {
	return <Header>
          <Column alignCenter>
						<SiteTitle>kayla fitzsimmons</SiteTitle>
						<H2>software developer</H2>
						<Links row/>
          </Column>
        </Header>
}

export { LandingPageHeader }
