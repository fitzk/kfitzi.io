import React from "react";
import styled from "styled-components";
import { NavAway } from "components";
import { Row } from "styled-flex";

const BlackNavAway = styled(NavAway)`
		color: black;
`;

const FontContainer = styled.div`
	margin: 5px;
	& .fa:hover {
		color: orange;
	}
`;

const LinkedIcon = ({ link, fontAwesomeClass }) => {
	return <FontContainer>
	            <BlackNavAway href={ link }>
	              <i className={ fontAwesomeClass }/>
	            </BlackNavAway>
	       </FontContainer>
}

export { LinkedIcon };
