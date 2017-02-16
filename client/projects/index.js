import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { CardText, RaisedButton, Chip } from "material-ui"
import MaterialTile, { MaterialTileGrid } from "react-material-tile"
import * as moment from "moment"
import { Column } from "styled-flex"
import { PageTitle, H2, Loading } from "components"
import { rmt, ca, kfitzi, rr, logo, hb1 } from "./images"
import { media, browser }  from "components/media"
import { Tile } from "./custom-tile"
import { grow } from "components/animations"

const Page = styled(Column)`
	width: 55vw;
	padding: .5em;
	height: auto;
`;

const Repos = styled(MaterialTileGrid)`
	animation: ${ grow } 3s 0s ease-in-out;
`;

const TileBuffer = styled.div``;

export class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			repos: undefined
		}
	}

	fetchStats(repo) {
		try {
			const url = `https://api.github.com/users/fitzk/repos?sort=updated&type=public`;
			return fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/vnd.github.v3+json"
				},
				credentials: "same-origin"
			}).then((response) => {
				return response.text()
			});
		} catch (error) {
			console.error(error)
		}
	}

	async componentDidMount() {
		let g = await this.fetchStats("kfitzi.io");
		this.setState({ repos: JSON.parse(g) })
	}

	getImage(name) {
		let obj= [
				{ name: "hb1-visa", displayName: "Top 100 HB1 Visa Sponsors", src: hb1, height: "100%", width: "100%", order: "1", initiallyExpanded: false },
			 	{ name: "react-material-tile", displayName: "React Material Tile", src: rmt, height: "100%", width: "100%", order: "2", initiallyExpanded: false },
		 		{ name: "CAVotesByCounty", displayName: "2016 Presidential Election Results, CA", src: ca, height: "100%", width: "100%", order: "3", initiallyExpanded: false },
				{ name: "kfitzi.io", displayName: "kfitzi.io", src: kfitzi, height: "100%", width: "100%", order: "4", initiallyExpanded: false },
				{ name: "Reuse-and-Repair", displayName: "Corvallis Sustainability Coalition", src: rr, height: "100%", width: "100%", order: "5", initiallyExpanded: false },
			].filter(item => name === item.name )
	 return obj[0] || { name: name, displayName: name, src: logo, height: "20%", width: "20%", order: "10", initiallyExpanded: true }
	}

	filterRecentProjects( repo ) {
		let projects = [
			"hb1-visa",
			"react-material-tile",
			"CAVotesByCounty",
			"kfitzi.io",
			"Reuse-and-Repair",
			"styled-flex"
		]
		return projects.includes(repo.name)
	}

	formatRepoInformation(repo) {
		let u = moment(new Date(repo.updated_at)).format("M/YYYY")
		let decoration_info =  this.getImage(repo.name);
		return {
			description: repo.description || "",
			name: repo.name,
			created: moment(new Date(repo.created_at)).format("YYYY"),
			updated: u,
			displayName: decoration_info.displayName,
			src: decoration_info.src,
			width: decoration_info.width,
			height: decoration_info.height,
			order: decoration_info.order,
			initiallyExpanded: decoration_info.initiallyExpanded

		}
	}

	makeTileCard(repo) {
		if(repo) {
			const {  displayName, name, ...decoration_info } = this.formatRepoInformation(repo);
			return  <TileBuffer key={repo.name}>
								<Tile { ...decoration_info } homepage={ repo.homepage }
																						 url={ repo.html_url }
																						 name={ displayName }/>
								</TileBuffer>
		}
		return <Loading/>;
	}

	render() {

		let repos = <Loading/>
		if (this.state.repos) {
			let _repos = this.state.repos
			.filter(repo => this.filterRecentProjects(repo))
			.map(repo => this.makeTileCard(repo));
			 if(_repos.length > 5){
				 repos = _repos;
			 }
		}

		return <Page alignCenter justifyCenter nowrap>
	           <PageTitle children="projects" />
						 <Repos column alignCenter justifyCenter>
           				{ repos }
							</Repos>
         		</Page>
	}
}
