import React, { Component } from "react";
import styled from "styled-components";
import { AppBar } from "material-ui";

// project components
import { Column } from "styled-flex";
import { MaterialDrawer as Drawer } from "./drawer";
import { Footer } from "./footer";
import { LandingPageHeader as Header } from "./header.js";
import { media } from "components/media";


const Bar = styled(AppBar)`
	color: white;
	font-family: Roboto, sans-serif !important;
`;

const Content = styled.div`
		width: 100%;
		height: 100%;
`;

const ContentSection = styled(Column)`
	width: 100vw;
	background-color: black;
	color: white;
	padding-bottom: 8vh;
	overflow-y: visible;
	height: auto;
	min-height: 100vh;
`;

const HeaderSection = styled(Column)`
	margin: 1em;
`;

const Page = styled.section`
	marign: 0;
	padding: 0;
`;

const View = styled(Column)`
		 overflow-y: visible;
		 overflow-x: hidden;
		 min-height: 1000px;
		 height: auto;
		 width: 100vw;
`;

export class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
		this.updateDrawerState = this.updateDrawerState.bind(this);
	}

	updateDrawerState() {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		return <Page>
           <Bar onLeftIconButtonTouchTap={ this.updateDrawerState } title="kfitzi" zDepth={ 0 }/>
           <Drawer open={ this.state.open } updateDrawerState={ this.updateDrawerState } />
           <Content>
             <View>
               <HeaderSection alignStart justifyStart onClick={ this.updateDrawerState }>
                 <Header/>
               </HeaderSection>
               <ContentSection alignCenter justifyCenter flexShrink="1">
                 { this.props.children }
               </ContentSection>
             </View>
             <Footer/>
           </Content>
         </Page>
	}
}
