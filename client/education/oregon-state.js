import React from "react"
import { Card, CardText, CardHeader, Avatar } from "material-ui"
import styled from "styled-components"
import { Container, Header, Content } from "./../styled"


const OregonState = props => {

	let ul = {
		position: "relative",
		left: "-1vw",
		top: "-2vh",
		fontSize: "1.2rem",
		flexWrap: "no-wrap",
		overflow: "hidden"
	}
	let avatar = {
		borderRadius: 0,
		width: 45
	}
	let title = {
		fontSize: "2.2rem",
		color: "white!important"
	}
	let ulContainer = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	}
	let p = {
		fontSize: "1.2rem",
		flexWrap: "no-wrap",
		flexShrink: "0",
		lineHeight: "1.5",
		margin: "10px"
	}
	return (
		<Container>
    <Header color="yellow">
      Education
    </Header>
    <Header>
      BS Computer Science Oregon State University, March 2016
    </Header>
    <Content style={ { color: "white!important", } }>
      <h4>Teaching Assistant: Intro to CS</h4>
      <p style={ p }>
        I graded assignments and provided mentorship to ~20 students enrolled in Introduction to Computer Science for three academic terms. For most of the students it was
        their first CS course, so I was really happy to have the opportunity to help them get past the initial hurdles of studying CS. Aside from providing direct
        tutoring, I worked to foster connections between students so that they could form relationships that would help them succeed throughout the rest of the program.
        I did this by creating and monitored an online peer study group which I encouraged students to utilize when they found a concept confusing.
      </p>
      <h4>Course Work Summary</h4>
      <div style={ ulContainer }>
        <ul style={ ul }>
          <li>
            Operating Systems
          </li>
          <li>
            Databases
          </li>
          <li>
            Networking
          </li>
          <li>
            UX Engineering
          </li>
          <li>
            Architecture & Assembly
          </li>
        </ul>
        <ul style={ ul }>
          <li>
            Software Engineering I & II
          </li>
          <li>
            Analysis of Algorithms
          </li>
          <li>
            Web Development
          </li>
          <li>
            Mobile Development
          </li>
          <li>
            Data Structures
          </li>
        </ul>
      </div>
    </Content>
  </Container>
	)
}

export default OregonState
