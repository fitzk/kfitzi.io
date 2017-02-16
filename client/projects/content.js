import React from "react";
import styled from "styled-components";
import { Row } from "styled-flex";
import { Chip, CardText } from "material-ui";
import { truncate } from "components/utils";
import { media }  from "components/media";


const MetaChip = styled(Chip)`
	& span {
		font-family: Roboto, sans-serif;
		font-size: 20px;
		padding: 0;
		margin-bottom: 0;

	}
	margin-right: 5px !important;
	${ media.handheld`
			align-self: start;
			transform: scale(0.75);` }
`;

const MetaContent = styled(Row)`
	${ media.handheld`top: 2em;` }
	font-family: Roboto, sans-serif;
	overflow: visible;
	width: auto;
`;

const Description = styled.p`
	font-size: 1rem;
	padding: 10px;
`;

const TextArea = styled(CardText)`
	margin: 8px;
	${ media.handheld`${ truncate("200px") }` }
`;

const Content = ({ updated, created, description }) => {
	return 	<TextArea>
							<MetaContent justifyStart alignStart>
									 <MetaChip backgroundColor="none" labelColor="black">
										 <i className="fa fa-pencil fa-lg"/>  { ` ${updated}` } </MetaChip>
									 <MetaChip backgroundColor="none" labelColor="black">
										 <i className="fa fa-birthday-cake"/> { ` ${created}` } </MetaChip>
							</MetaContent>
							<Description> { description } </Description>
				</TextArea>
}
export { Content }
