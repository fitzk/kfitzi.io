import React from "react"
import MediaQuery from "react-responsive"
import { nav } from "utils"
import styled, { css } from "styled-components";

/*esfmt-ignore-start*/
const Container = styled.div`
	max-height: 40vh;
`
export const MobileContainer = styled.div`
	margin: 2px;
`
export const Image = styled.img`
	height: 190px;
	width: 150px;
	border: 2px black solid;
	margin: 15px;
`
export const ImageCircle = styled.img`
	height: ${props => props.height}
	width: ${props => props.width}
	border-radius: 50%;
	border: 2px black solid;
`/*esfmt-ignore-end*/

export const ProfileImage = props => {
	const standard = <MediaQuery query="(min-device-width: 1224px)">
                    <Container>
                      <Image src={ props.src } />
                    </Container>
                  </MediaQuery>
	const mobile = <MediaQuery query="(max-device-width: 1224px)">
                  <MobileContainer>
                    <Image src={ props.src }
                           height="200px"
                           width="160px" />
                  </MobileContainer>
                </MediaQuery>
	return <div>
          { standard }
          { mobile }
        </div>
}
