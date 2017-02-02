import React from "react"
import logo from "./../assets/images/logo/logo_transparent_background.png"
import styled from "styled-components"
import { Row, Column } from "components"

/* esfmt-ignore-start */
const RowFooter = styled(Row)`
	background-color: ${props => props.theme.palette.primary1Color};
	width: 100vw;
	font-family: Roboto, Sans-serif;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
	color: white;
	padding: 0;
	margin: 0;
`/* esfmt-ignore-end */

export const Footer = props => {
	return <RowFooter alignCenter
                   justifySpaceAround>
          <Column alignEnd
                  justifyEnd>
            <img style={ { height: "100px", width: "100px", marginBottom: "20px" } }
                 src={ logo } />
          </Column>
          <Column alignEnd
                  justifyEnd>
            © 2016-present Kayla Fitzsimmons
          </Column>
          <Column>
          </Column>
        </RowFooter>

}
