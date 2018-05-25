import React from 'react'
import Component from 'react'
import Link from 'gatsby-link'

import SearchBar from '../components/SearchBar/index'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }

  wikiSearch() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=texas',
      {
        method: 'POST',
        headers: new Headers({
          'Api-User-Agent': 'Example/1.0',
        }),
        // Other init settings such as 'credentials'
      }
    )
      .then(function(response) {
        if (response.ok) {
          const data = response.json()
        }
        throw new Error('Network response was not ok: ' + response.statusText)
      })
      .then(function(data) {
        // do something with data
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <h1>Wikipedia Viewer</h1>
        <SearchBar />
        {this.wikiSearch()}
      </div>
    )
  }
}

export default IndexPage
