import React from 'react'
import Layout from '../components/layout'
import Page from '../components/page'

export default class App extends Page {
    render() {
      return (
        <div>
          <Layout {...this.props}  toggleModal={this.toggleModal} navmenu={true} container={false}/>
        </div>
      )
    }
}