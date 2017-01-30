import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { StyledSection } from "./../styled-components/containers"

export const Section = props => {

	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <StyledSection row>
              { props.children }
            </StyledSection>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <StyledSection>
              { props.children }
            </StyledSection>
          </MediaQuery>
        </div>
}
