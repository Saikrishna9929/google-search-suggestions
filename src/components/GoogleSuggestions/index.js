// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSuggestionsList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-search-bg-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="google-search-suggestion-container">
          <div className="google-search-input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="input-search"
              type="search"
              onChange={this.onChangingSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list-container">
            {filteredSuggestionsList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionItem={eachSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
