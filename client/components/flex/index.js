import React from "react"
import MediaQuery from "react-responsive"
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
	margin: 5px;
`
export const Display = styled.div`
  display: flex;
  flex-direction: ${ props => props.row && "row" || "column" };
  align-items: center;
  justify-content: center;
	margin: 5px;
`

export const Row = styled.div`
${flex}
  flex-direction: row;
`

export const Column = styled.div`
	${flex}
  flex-direction: column;
`

export const ColumnRow = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Display>
              { props.children }
            </Display>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Display row>
              { props.children }
            </Display>
          </MediaQuery>
        </div>
}

export const RowColumn = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Display row>
              { props.children }
            </Display>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Display>
              { props.children }
            </Display>
          </MediaQuery>
        </div>
}
