// Write your code hereimport

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  onInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onUserclick = suggestion => {
    this.setState({userInput: suggestion})
  }

  render() {
    const {userInput} = this.state
    const {suggestionsList} = this.props
    const searchedData = suggestionsList.filter(eachsug =>
      eachsug.suggestion.toLowerCase().includes(userInput),
    )
    return (
      <div className="bg">
        <img
          className="img"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="sc">
          <div className="sc2">
            <img
              className="img-search"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              placeholder="Search Google"
              className="input"
              onChange={this.onInputChange}
              value={userInput}
              type="search"
            />
          </div>
          <div>
            <ul className="ulist">
              {searchedData.map(eachsug => (
                <SuggestionItem
                  onUserclick={this.onUserclick}
                  key={eachsug.id}
                  uid={eachsug.id}
                  suggestion={eachsug.suggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
