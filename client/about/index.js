import React from "react"
import styled from "styled-components";
import { Row, Column, H1 } from "components"

/*esfmt-ignore-start*/
const Paragraph = styled(Row)`
	font-family: Roboto, Sans-serif;
	margin: 10px;
	max-width: 50vw;
	margin-bottom: 20vh;
`
const FontContainer = styled.div`
	height: 1em
	margin: 5px;
`
/*esfmt-ignore-end*/
export const About = props => {
	/*esfmt-ignore-start*/
	const header = <H1> about </H1>;
	/*esfmt-ignore-end*/

	return <Column>
          <Column alignStart>
            <Row>
              { header }
            </Row>
            <Paragraph>
              { `California native && SF Bay Area software developer. ` }
              <FontContainer>
                <a href="https://twitter.com/kfitzikfitzi"><i className="fa fa-twitter"
                                                              aria-hidden="true"></i></a>
              </FontContainer>
            </Paragraph>
          </Column>
        </Column>
}
