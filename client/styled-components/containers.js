import styled, { css } from "styled-components";

const flex = css`
  display: flex;
	margin: 5px;
`
export const StyledSection = styled.div`
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

export const LandingPageHeader = styled(Row)`
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
`
