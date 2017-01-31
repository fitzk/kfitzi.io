import React from "react"
import Scroll from "react-scroll"
import { Card, CardHeader } from "material-ui"
import OregonState from "./oregon-state"
import UCSB from "./ucsb"
import { Header } from "./../styled"


const Section = styled.div`
top: 100vh;
position: relative;
z-index: 20;
background-color: black;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Education = props => {
	const scrollHeight = 0
	Scroll.animateScroll.scrollTo(scrollHeight)
	return <Section>
          <OregonState/>
          <UCSB/>
        </Section>
}

export default Education
