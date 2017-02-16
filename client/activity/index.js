import React, { Component } from "react";
import "whatwg-fetch";
import { Paper } from "material-ui";
import CodeMirror from "react-codemirror";
import styled from "styled-components";
import { PageTitle } from "components";
import { Row, Column } from "styled-flex";
import { Gists } from "./gists";

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
