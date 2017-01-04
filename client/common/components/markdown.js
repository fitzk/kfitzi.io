/*
 * @flow
*/
import React from "react"
import { Card, CardHeader, CardText } from "material-ui"

const Md = props => {
  const cardStyle = {
      overflowWrap: "break-word",
      backgroundColor: "#E8F8F4",
      width: "80vw",
      border: "black 1px solid",
      marginBottom: "2px",
      padding: "0"
    },
    headerStyle = {
      paddingTop: "5px",
      paddingBottom: "0"
    },
    titleHeaderStyle = {
      fontSize: "1.2em",
      marginTop: '5px',
      marginBottom: "2px"
    },
    row = {
      display: "flex",
      flexDirection: "row"
    },
    cardTextStyle = {
      flexWrap: "wrap",
      overflowWrap: "break-word",
      wordBreak: "normal",
      margin: "5px"
  }
  // let tags = file.tags

  // if (file.tags) {
  //   tags = file.tags.map(tag => <div key={file.tags.indexOf(tag)}
  //     className="tag"> { tag } </div>)
  // }
  return (
    <Card expandable={ true }>

		  <CardHeader
    actAsExpander={ true }
    showExpandableButton={ true }
    title={""}/>

		  <CardText expandable={ true }>
			  { props.file }

		  </CardText>

	  </Card>
  )
}


export default Md
