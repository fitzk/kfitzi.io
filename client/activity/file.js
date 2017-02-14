import React from "react"
import { Row, Column } from "components"
import { Card, CardHeader, CardText } from "material-ui"
import CodeMirror from "react-codemirror"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/python/python"
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css"
import styled, { injectGlobal } from "styled-components"
import { media } from "components/media"

const FileContainer = styled(Column)`
	flex-grow: 2;
	align-self: center;
	padding: 16px;
`
const CodeBin = styled(CodeMirror)`
	font-family: Roboto, sans-serif;
	height: auto !important;
	position: relative;
	overflow-y: scroll;
`;

const CardWrapper = styled(Card)`
	${ media.handheld`
		 width: 90vw;` }
 ${ media.desktop`
		 width: 50vw;` }
`;
const File = ({ index, filename, language, code }) => {
	return <FileContainer width="min-content"
                       alignStart
                       justifyStart>
          <CardWrapper initiallyExpanded={ false }>
            <CardHeader title={ filename }
                        actAsExpander
                        showExpandableButton={ true } />
            <CardText expandable={ true }>
                <CodeMirror options={ { lineNumbers: true, mode: language.toLowerCase(), theme: "neo" } }
                            value={ code } />
            </CardText>
          </CardWrapper>
        </FileContainer>


}
export { File }
