import React, { Component } from "react"
import { Row } from "components/flex"
import { LinkedIcon } from "components/linked-icon"

export const Links = props => {
	return <Row>
					<LinkedIcon link="https://angel.co/kfitzi" fontAwesomeClass="fa fa-angellist"/>
					<LinkedIcon link="https://twitter.com/kfitzikfitzi" fontAwesomeClass="fa fa-twitter"/>
			  	<LinkedIcon link="https://github.com/fitzk" fontAwesomeClass="fa fa-github-alt"/>
			    <LinkedIcon link="https://github.com/fitzk" fontAwesomeClass="fa fa-medium"/>
			    <LinkedIcon link="https://www.linkedin.com/in/kayla-fitzsimmons-915559130/" fontAwesomeClass="fa fa-linkedin"/>
			    <LinkedIcon link="http://stackoverflow.com/users/6846678/kfitzi" fontAwesomeClass="fa fa-stack-overflow"/>
 				</Row>
}
