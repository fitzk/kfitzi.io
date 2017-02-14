import React from "react"
import styled from "styled-components";
import { Column } from "./flex"

const Container = styled(Column)`
	width: 100vw;
	min-height: 600px;
	padding: 50px;
`;

const Loading = () => <Container alignCenter justifyStart>
	<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
	<span className="sr-only">Loading...</span>
</Container>

export { Loading }
