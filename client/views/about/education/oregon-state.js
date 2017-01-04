import React from "react"
import { Card, CardText, CardHeader, Avatar } from "material-ui"


const OregonState = props => {

  let headerA = {
    fontWeight: "400",
    fontSize: "1.2rem"
  }
  let ul = {
    position: "relative",
    left: "-1vw",
    top: "-2vh",
    fontSize: "1rem",
    flexWrap: "no-wrap",
    overflow: "hidden"
  }
  let avatar = {
    borderRadius: 0,
    width: 45
  }
  let osu = "https://upload.wikimedia.org/wikipedia/commons/3/36/Oregon_State_University_logo.svg"
  let title = {
    fontSize: "1.3rem"
  }
  let ulContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  let p = {
    flexWrap: "no-wrap",
    flexShrink: "0",
    lineHeight: "1.5",
    margin: "10px"
  }

  return (
    <Card zDepth={0} style={{
      alignSelf: "center",
      width: "70vw",
      marginBottom: "5px"
    }}>
            <CardHeader titleStyle={title}
    avatar={ <Avatar backgroundColor="white" style={avatar} src={osu}/> }
    title="BS Computer Science"
    subtitle="Oregon State University, March 2016"/>


            <CardText>
                <h3 style={ headerA }> Teaching Assistant: Intro to CS </h3>
                <p style={p}>
                    Mentored groups of 20 students enrolled in
                    Introduction to Computer Science for three academic terms.
                    For most of the students it was their first CS
                    course. Graded student programming assignments,
                    and provided tutoring. Created online peer study group
                    to help students to begin collaborating early in the term.
                </p>

                <h3 style={headerA}>
                    Course Work Summary
                </h3>
                <div style={ulContainer}>
                    <ul style={ul}>
                        <li>Operating Systems</li>
                        <li>Databases</li>
                        <li>Networking</li>
                        <li>UX Engineering</li>
                        <li>Architecture & Assembly</li>
                    </ul>
                    <ul style={ul}>
                        <li>Software Engineering I & II</li>
                        <li>Analysis of Algorithms</li>
                        <li>Web Development</li>
                        <li>Mobile Development</li>
                        <li>Data Structures</li>
                    </ul>
                </div>
            </CardText>
        </Card>
  )
}

export default OregonState
