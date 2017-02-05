import React, { Component } from "react"
import "whatwg-fetch"
import { Paper } from "material-ui"
import { Row, Column } from "components"
import { scroll } from "utils"
import * as moment from "moment"
import MediaQuery from "react-responsive"

import "./index.scss"
import styled from "styled-components"

/*esfmt-ignore-start*/
const Container = styled(Column)`
	background-color: white;
	color: black
	width: auto;
	height: auto;
	margin: .5em;
	width: 70vw;
	padding: 24px;
`
const Description = styled(Row)`
	font-family: Roboto, Sans-serif;
	width: 60vw;
`/*esfmt-ignore-end*/

const Gist = ({index, created_at, description, children}) => {
	return <Column alignCenter
                justifyCenter>
          <Container>
            <Description alignStart
                         justifyStart>
              <Column>
                <h3>{ created_at }</h3>
                { description }
              </Column>
            </Description>
            { children }
          </Container>
        </Column>
}
export { Gist }
