import React from 'react';
import Component from 'react';
import Link from 'gatsby-link';

import Results from '../components/Results';
import Random from '../components/Random';

import './main.scss';
import search from '../assets/search.svg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.wikiSearch = this.wikiSearch.bind(this);
    this.getRandomArticle = this.getRandomArticle.bind(this);
    this.state = {
      results: ['', [], [], []],
      random: '',
      pageID: '',
    };
  }

  wikiSearch(e) {
    e.preventDefault();

    const term = e.target.elements.term.value.trim();
    fetch(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${term}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          results: myJson,
          random: '',
          pageID: '',
        });
      })
      .catch(error => console.error('Error:', error));
    e.target.elements.term.value = '';
  }

  getRandomArticle() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&generator=random&grnnamespace=0`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        for (const prop in myJson.query.pages) {
          let extract = myJson.query.pages[prop].extract;
          let id = myJson.query.pages[prop].pageid;
          this.setState({
            results: ['', [], [], []],
            random: extract,
            pageID: id,
          });
        }
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container">
        <img src={search} alt="search" className="search-icon" />
        <h1 className="search-title">Wikipedia Viewer</h1>
        <h2 className="search-prompt">I want to learn about</h2>
        <div className="search-container">
          <form className="search-container__form" onSubmit={this.wikiSearch}>
            <input
              type="text"
              name="term"
              className="search-container__input"
              autoComplete="off"
            />
            <input
              type="submit"
              value="Search"
              className="search-container__button"
            />
            <input
              type="button"
              value="Surprise Me"
              className="search-container__button"
              onClick={this.getRandomArticle}
            />
          </form>
        </div>
        {this.state.random !== '' ? (
          <a href={'http://en.wikipedia.org/?curid=' + this.state.pageID}>
            <Random random={this.state.random} />
          </a>
        ) : (
          <div />
        )}

        <Results results={this.state.results} />
      </div>
    );
  }
}

export default IndexPage;
