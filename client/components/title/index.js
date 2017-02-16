import React from "react"
import styled, { css } from "styled-components";
import { media } from "components/media"

const title = styled.div`
  overflow: hidden;
	display: flex;
  height: ${ props => props.h || "auto" };
`;

export const H1 = styled(title)`
  ${ media.handheld`
    word-wrap: break-word;
    word-break: normal;
    font-size: 2em;` }
  color: ${ props => props.theme.palette.accent3Color };
  margin-left: ${ props => props.marginLeft };
  font-weight: bold;
  font-size: 3em;
  padding: ${ props => props.padding };
`;

export const H2 = styled(title)`
  font-size: 2em;
  ${ media.handheld`font-size: 1em;` }
`;

export const PageTitle = styled(H1)`
  margin-top: 1em;
  margin-bottom: 1.5em;
  font-size: 2.5rem;
  color: white;
 ${ media.handheld`font-size: 2.75rem;`}
`;
