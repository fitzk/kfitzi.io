import React from "react"
import styled from "styled-components"
import { Row, A } from "components"

const Link = styled(A)`
		color: black;
		height: 10px;
`;

const FontContainer = styled.div`
	height: 1em;
	margin: 5px;
`;

const LinkedIcon = ({ link, fontAwesomeClass }) => {
	return <FontContainer>
	            <Link href={ link }>
	              <i className={ fontAwesomeClass }/>
	            </Link>
	       </FontContainer>
}

export { LinkedIcon }
