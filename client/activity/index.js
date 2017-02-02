import React, { Component } from "react"
import "whatwg-fetch"
import { Paper } from "material-ui"
import { Row, Column, H1, H2 } from "components"
import CodeMirror from "react-codemirror"
import { scroll } from "utils"
import * as moment from "moment"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/python/python"
import "./index.scss"
import styled from "styled-components"

/*esfmt-ignore-start*/
const CodeBin = styled(Row)`
	width: 60vw;
	overflow: auto;
	font-family: Roboto, Sans-serif;
`
const Description = styled(Row)`
	width: 60vw;
	padding: 10px;
	font-family: Roboto, Sans-serif;
	margin-bottom: 0;
`/*esfmt-ignore-end*/

export class ActivityStream extends Component {
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
				gist.fileObjects.push({ filename: _file.filename, language: _file.language, raw_url: _file.raw_url, code: "" })
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
			scroll((window.innerHeight / 2.2))
			gists = this.state.gists.map(gist => {
				let codefiles = gist.fileObjects.map(file => {
					return <div key={ gist.fileObjects.indexOf(file) }>
              <h4>{ file.filename }</h4>
              <CodeBin alignStart
                       justifyStart>
                <CodeMirror style={ { width: "59vw" } }
                            options={ { lineNumbers: true, mode: file.language.toLowerCase(), theme: "neo" } }
                            value={ file.code } />
              </CodeBin>
            </div>
				});
				return <div key={ this.state.gists.indexOf(gist) }>
             <Paper zDepth={ 0 }
                    style={ { border: "solid black 2px", backgroundColor: "white", padding: "10px", margin: "10px" } }>
               <Column>
                 <Description alignStart
                              justifyStart>
                   <div>
                     <h3>{ gist.created_at }</h3>
                     { gist.description }
                   </div>
                 </Description>
                 { codefiles }
               </Column>
             </Paper>
           </div>
			});
		}
		return <div>
           <H1 children="activity"
               marginLeft="20px"
               padding="20px" />
           { gists }
         </div>
	}
}
