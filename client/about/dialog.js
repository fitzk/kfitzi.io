// import React, { Component } from "react"
// import Dialog from "material-ui/Dialog"
// import FlatButton from "material-ui/FlatButton"
// import RaisedButton from "material-ui/RaisedButton"
// import { FirebaseInit, config } from "src/views/firebase.js"
// //import * as firebase from "src/views/firebase"
// import { Parallax, Background } from "react-parallax"
//
// export default class DialogAlert extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			open: false,
// 			url: ""
// 		}
// 	}
//
// 	handleOpen() {
// 		this.setState({
// 			open: true
// 		})
// 	}
//
// 	handleClose() {
// 		this.setState({
// 			open: false
// 		})
// 	}
//
// 	downloadResume() {
// 		this.handleClose()
// 		const app = firebase.initializeApp(config)
// 		const storage = app.storage()
// 		const storageRef = storage.ref()
// 		const pdfRef = storageRef.child("./fitzsimmons_resume.pdf")
//
// 		pdfRef.getDownloadURL().then(url => {
// 			// Insert url into an <img> tag to "download"
// 			this.setState({
// 				url: url
// 			})
// 		}).catch(function(error) {
// 			switch (error.code) {
// 				case "storage/object_not_found":
// 					// File doesn't exist
// 					break
//
// 				case "storage/unauthorized":
// 					// User doesn't have permission to access the object
// 					break
//
// 				case "storage/canceled":
// 					// User canceled the upload
// 					break
// 				case "storage/unknown":
// 					// Unknown error occurred, inspect the server response
// 					break
// 			}
// 		})
// 	}
//
// 	render() {
// 		const actions = [
// 			<FlatButton label="Cancel"
//                primary={ true }
//                onTouchTap={ this.handleClose.bind(this) } />,
// 			<a href={ this.state.url }
//       download={ true }>
//      <FlatButton label="Download"
//                  primary={ true }
//                  onTouchTap={ this.downloadResume.bind(this) } />
//    </a>,
// 		]
//
// 		return (
// 			<Parallax strength={ 1000 }>
//      <Background style={ { width: "100vw", height: "50vh" } } />
//      <RaisedButton label="Download Resume"
//                    onClick={ this.handleOpen.bind(this) }
//                    primary={ true } />
//      <Dialog actions={ actions }
//              modal={ false }
//              open={ this.state.open }
//              onRequestClose={ this.handleClose.bind(this) }>
//        Download pdf?
//      </Dialog>
//    </Parallax>
// 		)
// 	}
// }
