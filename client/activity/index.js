import React, { Component } from "react"
import "whatwg-fetch"
import { Paper } from "material-ui"
import { Row, Column, PageTitle} from "components"
import CodeMirror from "react-codemirror"
import { scroll } from "utils"
import styled from "styled-components"
import { Gists } from "./gists"

const Container = styled(Column)`
`;

const ActivityStream = props => {
	return <Container wrap
                   alignCenter>
          <PageTitle children="gists"/>
          <Gists/>
        </Container>

}
export { ActivityStream }
