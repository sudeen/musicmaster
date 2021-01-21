import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistQuery: "",
    };
  }
  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div className="input-form">
        <input
          type="text"
          className="input-field"
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist..."
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
