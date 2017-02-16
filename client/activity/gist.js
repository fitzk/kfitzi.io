import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column } from "styled-flex";

const Container = styled(Column)`
	background-color: black;
	color: white;
	height: auto;
	margin: .5em;
	padding: 16px;
`;

const Description = styled(Row)`
	font-family: Roboto, Sans-serif;
	max-width: 50vw;
`;

const Gist = ({ index, created_at, description, children }) => {
	return <Column alignCenter justifyCenter>
          <Container>
            <Description alignStart justifyCenter>
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
