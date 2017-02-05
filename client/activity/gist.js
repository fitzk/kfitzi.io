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
	padding: 1em;
	position: relative;
	width: 90%;
	margin: .5em;
`
const Description = styled(Row)`
	padding: 10px;
	font-family: Roboto, Sans-serif;
	margin-bottom: 0;
`/*esfmt-ignore-end*/

const Gist = ({index, created_at, description, children}) => {
	return <Column key={ index }
                alignCenter
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
