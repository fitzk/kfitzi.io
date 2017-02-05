import React from "react"
import styled from "styled-components"
import { Row, Column, H1, RowColumn } from "components"

/*esfmt-ignore-start*/
const Container = styled(Column)`
	padding: 2em;
	height: 90vh;
`

const Paragraph = styled.p`
	font-family: Roboto, sans-serif;
	font-size: 1.25rem;
	color: white;
	font-weight: 200;
	overflow: hidden;
	max-width: 700px;
	height: auto;
`/*esfmt-ignore-end*/

export const About = props => {
	return <Container alignStart
                   justifyCenter>
          <H1 children="about" />
          <Paragraph>
            { `California native and SF bay area software developer.
								I use React, Redux, Webpack, Babel, and Styled Components to build modern
								web applications. I spend my free time working on side projects, as well as reading and writing
								about software development.
								` }
          </Paragraph>
        </Container>
}
