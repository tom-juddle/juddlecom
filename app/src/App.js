import React from 'react'
import Layout from './components/layout'
import Page from './components/page'
import HtmlHead from "./components/htmlHead";

export default class App extends Page {

    render() {
      return (
        <div>
          <HtmlHead/>
          <Layout {...this.props}  toggleModal={this.toggleModal} navmenu={true} container={false}/>
        </div>
      )
    }
}