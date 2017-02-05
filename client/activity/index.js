import React, { Component } from "react"
import "whatwg-fetch"
import { Paper } from "material-ui"
import { Row, Column, H1, H2 } from "components"
import CodeMirror from "react-codemirror"
import { scroll } from "utils"
import styled from "styled-components"
import { Gists } from "./gists"

/*esfmt-ignore-start*/
const Container = styled(Column)`
	height: inherit;
	min-height: 90vh;
	width: 85vw;
`/*esfmt-ignore-end*/

const ActivityStream = props => {
	return <Container wrap
                   alignCenter>
          <H1 children="activity: gists"
              marginLeft="20px"
              padding="20px" />
          <Gists/>
        </Container>

}
export { ActivityStream }
