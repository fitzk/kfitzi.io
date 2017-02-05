import React, { Component } from "react"
import "whatwg-fetch"
import { Row, Column, H1, H2 } from "components"
import * as moment from "moment"
import "./index.scss"
import { File } from "./file"
import { Gist } from "./gist"
import styled from "styled-components"

/*esfmt-ignore-start*/

const GistContainer = styled(Column)`
	color: white;
`
/*esfmt-ignore-end*/

export class Gists extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gists: undefined
		}
	}

	fetchGists() {
		try {
			const url = "https://api.github.com/users/fitzk/gists";
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

	fetchGist(raw_url) {
		try {
			return fetch(raw_url, {
				method: "GET",
				credentials: "same-origin"
			}).then(function(response) {
				return response.text()
			})
		} catch (error) {
			console.error(`fetchGist: ${error}`)
		}
	}

	getGistsWithFileObjects(gists) {
		return gists.map(_gist => {
			let m = moment(new Date(_gist.created_at)).format("MM/DD/YYYY hh:mm a")
			let gist = { created_at: m, description: _gist.description };
			gist.fileObjects = []
			for (let file in _gist.files) {
				let _file = _gist.files[file]
				gist.fileObjects.push({
					filename: _file.filename,
					language: _file.language,
					raw_url: _file.raw_url,
					code: ""
				})
			}
			return gist;
		})
	}

	async getCodeForFile(raw_url) {
		try {
			let code = await this.fetchGist(raw_url);
			return code
		} catch (error) {
			console.error(`getCodeForFile: ${error}`)
		}
	}

	async getCodeFilesPerGist(_gist) {
		let gist = _gist
		for (let file of _gist.fileObjects) {
			try {
				let index = gist.fileObjects.indexOf(file)
				gist.fileObjects[index]["code"] = await this.getCodeForFile(file.raw_url)
			} catch (error) {
				console.error(`getCodeFilesPerGist: ${error}`)
			}
		}
		return gist;
	}

	async getCodeFiles(_gists) {
		try {
			let gists = []
			for (let _gist of _gists) {
				let gist = await this.getCodeFilesPerGist(_gist)
				gists.push(gist);
			}
			return gists
		} catch (error) {
			console.error(`getCodeFiles: ${error}`)
		}
	}

	async setGists(data) {
		let gistsWithFileObjects = this.getGistsWithFileObjects(data);
		let gists = undefined;
		if (gistsWithFileObjects) {
			try {
				gists = await this.getCodeFiles(gistsWithFileObjects);
			} catch (error) {
				console.error(`gists: ${error}`)
			}
		}
		if (gists) {
			this.setState({ gists: gists })
		}
	}

	async componentDidMount() {
		try {
			let g = await this.fetchGists();
			if (g) {
				let parsedGistData = JSON.parse(g)
				this.setGists(parsedGistData)
			}
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		let gists = <H2 children="loading..." />

		if (this.state.gists) {
			gists = this.state.gists.map(gist => {

				let codefiles = gist.fileObjects.map(file => {
					let index = gist.fileObjects.indexOf(file)
					return <File index={ index }
                  filename={ file.filename }
                  language={ file.language }
                  code={ file.code } />
				});

				return <Gist index={ this.state.gists.indexOf(gist) }
                 description={ gist.description }
                 created_at={ gist.created_at }>
             { codefiles }
           </Gist>
			});
		}
		return <GistContainer>
           { gists }
         </GistContainer>
	}
}
