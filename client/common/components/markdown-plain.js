import React from "react"
import { Card, CardHeader, CardText } from "material-ui"

const MarkdownPlain = props => {
	const file = props.file

    return (
			<div>
					{file.render()}
			</div>
    )
}


export default MarkdownPlain
