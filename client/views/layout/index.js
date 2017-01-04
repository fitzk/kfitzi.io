import React, { Component } from "react";
import Layout from "./layout";

export default class Index extends Component {
  render() {
    return (
      <Layout>
          { this.props.children }
      </Layout>
    )
  }
}
