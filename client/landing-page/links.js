import React, { Component } from "react"
import styled from "styled-components"
import { Row, A } from "components"


/* esfmt-ignore-start */
const FontContainer = styled.div`
	height: 1em;
	margin: 5px;
	`/* esfmt-ignore-end */

export const Links = props => {

	return <Row>
          <FontContainer>
            <A href="https://angel.co/kfitzi">
              <i className="fa fa-angellist"
                 aria-hidden="true" />
            </A>
          </FontContainer>
          <FontContainer>
            <A href="https://twitter.com/kfitzikfitzi">
              <i className="fa fa-twitter"
                 aria-hidden="true" />
            </A>
          </FontContainer>
          <FontContainer>
            <A href="https://github.com/fitzk">
              <i className="fa fa-github-alt"
                 aria-hidden="true" />
            </A>
          </FontContainer>
          <FontContainer>
            <A href="https://github.com/fitzk">
              <i className="fa fa-medium"
                 aria-hidden="true" />
            </A>
          </FontContainer>
          <FontContainer>
            <A href="https://www.linkedin.com/in/kayla-fitzsimmons-915559130/">
              <i className="fa fa-linkedin"
                 aria-hidden="true" />
            </A>
          </FontContainer>
          <FontContainer>
            <A href="http://stackoverflow.com/users/6846678/kfitzi">
              <i className="fa fa-stack-overflow"
                 aria-hidden="true" />
            </A>
          </FontContainer>
        </Row>
}
