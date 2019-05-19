import React from 'react'

export default class extends React.Component {
  
  static async getInitialProps({req}) {
    return {
      lang: 'en' // Add a lang property to all pages for accessibility
    }
  }

}