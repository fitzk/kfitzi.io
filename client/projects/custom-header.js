import React from "react";
import styled from "styled-components";
import { Column, Row } from "styled-flex";
import { LinkedIcon } from "components/linked-icon";
import { RowColumn, H1 } from "components";
import { media }  from "components/media";


const CardTitle = styled(H1)`
	word-wrap: normal;
	font-size: 2rem;
	${ media.handheld`
		 font-size: 1.5rem;
		 margin-right: 5px;` }
	${ media.desktop`
		 font-size: 2rem;
		 margin-right: 15px;` }
`;

const Icon = styled(LinkedIcon)``;

const HeaderContainer = styled(Column)`
	padding: 24px;
`;

const CustomHeader = ({ title, url, homepage, updated, created, onClick }) => {
	return <HeaderContainer onClick={ onClick } justifyStart alignStart>
						<Row alignCenter justifyStart>
							<CardTitle> { title } </CardTitle>
							{ homepage !== "" && <Icon fontAwesomeClass="fa fa-external-link fa-lg" link={ homepage }/>}
							<Icon fontAwesomeClass="fa fa-github-alt fa-lg" link={ url }/>
						</Row>
					</HeaderContainer>
}

export { CustomHeader }
