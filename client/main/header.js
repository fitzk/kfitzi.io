import React from "react"
import styled from "styled-components"
import { Row, Column, H1, H2 } from "components"
import { Links } from "./links"

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
						<Links/>
          </Column>
        </Header>
}

export { LandingPageHeader }
