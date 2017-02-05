import React from "react"
import { Row, Column } from "components"
import { Card, CardHeader, CardText } from "material-ui"
import CodeMirror from "react-codemirror"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/python/python"
import "./index.scss"
import styled from "styled-components"
import MediaQuery from "react-responsive"

/*esfmt-ignore-start*/
const FileContainer = styled(Column)`
	flex-grow: 2;
  width: auto;
	align-self: center;
	padding: 16px;
`
const CodeBin = styled(Row)`
	font-family: Roboto, Sans-serif;
`/*esfmt-ignore-end*/

const File = ({index, filename, language, code}) => {
	return <FileContainer width="min-content"
                       alignStart
                       justifyStart>
          <Card containerStyle={ { width: "60vw" } }
                initiallyExpanded={ false }>
            <CardHeader title={ filename }
                        actAsExpander
                        showExpandableButton={ true } />
            <CardText expandable={ true }>
              <CodeBin alignCenter
                       justifyStart>
                <CodeMirror options={ { lineNumbers: true, mode: language.toLowerCase(), theme: "neo" } }
                            value={ code } />
              </CodeBin>
            </CardText>
          </Card>
        </FileContainer>


}
export { File }
