import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import MaterialTile from "react-material-tile"
import { CustomHeader } from "./custom-header"
import { Content } from "./content"
import { media, browser }  from "components/media"
import { fade } from "components/animations"

const StyledMaterialTile = styled(MaterialTile)`
	height: auto;
	overflow: hidden;
	margin-bottom: 5px;
	min-width: 55vw;
	& div img {
		animation: ${ fade } 500ms 0 ease-in;
	}
	animation: ${ fade } 500ms 0 ease-in;
	order: ${ props => props.order };
	${ media.desktop`
		 width: 55vw;` }
	${ media.handheld`
		 width: 100vw;` }
`;

const Tile = ({ displayName, name, src, updated,
								created, width, height, url, homepage,
								description, order, initiallyExpanded, children }) => {
	return <StyledMaterialTile title = { displayName || name }
														 noImageInHeader
														 CustomHeader={ <CustomHeader homepage={ homepage } url={ url } /> }
														 src={ src }
														 tileWidth={ width }
														 tileHeight={ height }
														 order={ order }
														 initiallyExpanded={ initiallyExpanded }>
															 <Content created={ created }
																				updated={ updated }
																				description={ description }/>
				 								</StyledMaterialTile>
};

export { Tile };
