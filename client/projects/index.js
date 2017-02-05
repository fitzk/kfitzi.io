import React, { Component } from "react"
import styled from "styled-components"
import { scroll } from "utils"
import { Element } from "react-scroll"
import { Row, Column, H1, H2 } from "components"
import * as moment from "moment"
/*esfmt-ignore-start*/
const Paragraph = styled(Column)`
	font-family: Roboto, Sans-serif;
	margin: 5px;
	width: 60vw;
`
const Content = styled(Column)`
	width: 60vw;
`
const A = styled.a`
text-decoration: none;
color: blue;
font-size: 1rem;
`
/*esfmt-ignore-end*/

export class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			repos: undefined
		}
	}
	fetchStats(repo) {
		try {
			const url = `https://api.github.com/users/fitzk/repos?sort=created&type=public`;
			return fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/vnd.github.v3+json"
				},
				credentials: "same-origin"
			}).then(function(response) {
				return response.text()
			})
		} catch (error) {
			console.error(error)
		}
	}
	async componentDidMount() {
		let g = await this.fetchStats("kfitzi.io");
		this.setState({ repos: JSON.parse(g) })
	}
	titleCase(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	formatName(string) {
		if (string.match(/[A-Z][a-z]+/g))
			string = string.match(/[A-Z][a-z]+/g).join("-")
		let strings = string.split("-")
		return strings.map(string => this.titleCase(string)).join(" ")
	}
	render() {

		const header = <H1 children="recent projects" />
		let repos = <H2 children="loading..." />
		if (this.state.repos) {
			scroll((window.innerHeight / 2.2))
			repos = this.state.repos.filter(repo => new Date(repo.created_at) > new Date("2016-01-01")).map(repo => {
				let description = ""
				if (repo.description)
					description = `description: ${repo.description}`
				let name = this.formatName(repo.name)
				let created = moment(new Date(repo.created_at)).format("MM/DD/YYYY")

				let updated = moment(new Date(repo.updated_at)).format("MM/DD/YYYY")

				return <Paragraph justifyStart
                      alignStart>
             <A href={ `${repo.html_url}` }>
               { `${name}` }
             </A>
             { `last updated: ${updated}` }
             <br/>
             { `created: ${created}` }
             <br/>
             { description }
           </Paragraph>
			});
		}
		return <Column justifyStart>
           { header }
           { repos }
         </Column>
	}
}