import React from 'react'

import './style.scss'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search_container">
        <form action="">
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
