import React from "react"
import { Row, Column } from "components"
import CodeMirror from "react-codemirror"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/python/python"
import "./index.scss"
import styled from "styled-components"
import MediaQuery from "react-responsive"

/*esfmt-ignore-start*/
const FileContainer = styled(Column)`
	flex-grow: 2;
 paddig-right: 10em;
 paddig-left: 10em;
`
const CodeBin = styled(Row)`
	font-family: Roboto, Sans-serif;
`/*esfmt-ignore-end*/

const File = ({index, filename, language, code}) => {
	return <FileContainer width="min-content"
                       key={ index }
                       alignStart
                       justifyStart>
          <h4>{ filename }</h4>
          <CodeBin alignCenter
                   justifyStart>
            <CodeMirror options={ { lineNumbers: true, mode: language.toLowerCase(), theme: "neo" } }
                        value={ code } />
          </CodeBin>
        </FileContainer>


}
export { File }
