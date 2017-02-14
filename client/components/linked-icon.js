import React from "react"
import styled from "styled-components"
import { Row, A } from "components"

const Link = styled(A)`
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
	            <Link href={ link }>
	              <i className={ fontAwesomeClass }/>
	            </Link>
	       </FontContainer>
}

export { LinkedIcon }
