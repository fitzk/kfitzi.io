import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import MaterialTile from "react-material-tile"
import { CustomHeader } from "./custom-header"
import { media, browser }  from "components/media"

const fade = keyframes`
  0% { 	transfrom: scaleY(1.5);
				background-color: black; }
  100% { transform: scaleY(1);
				 background-color: white }
`;

const StyledMaterialTile = styled(MaterialTile)`
	height: auto;
	& div img {
		animation: ${ fade } 0.3s 0s ease-in-out;
	}
	animation: ${ fade } 0.3s 0s ease-in-out;
	order: ${ props => props.order };
	${ media.desktop`
		 width: 55vw;` }
	${ media.handheld`
		 width: 100vw;` }
`;

const Tile = ({ displayName, name, src, updated,
								created, width, height, url, homepage,
								order, initiallyExpanded, children }) => {
	return <StyledMaterialTile
												title = { displayName || name }
												rounded
												noImageInHeader
												CustomHeader={ <CustomHeader /> }
												src={ src }
												updated={ updated }
												created={ created }
												tileWidth={ width }
												tileHeight={ height }
												order={ order }
												initiallyExpanded={ initiallyExpanded }
												homepage={ homepage }
												url={ url }>
						{ children }
				 </StyledMaterialTile>
};

export { Tile };
