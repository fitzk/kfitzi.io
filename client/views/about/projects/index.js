import React from "react"
import MarkdownPlain from "shared_components/Markdown-plain"
import { CardText } from "material-ui"
import { Parallax, Background } from "react-parallax"

import ContentSection from "shared_components/content-section"

const Projects = props => {

  return (
    <div>
		 <Parallax strength={ 200 }>
		<ContentSection title="projects">
						<CardText>
						  this is where project cards will go
						</CardText>
				  </ContentSection>
		 </Parallax>
  </div>
  )
}

export default Projects
