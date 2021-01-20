import React, { Component } from "react";
import "./App.css";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: [],
    };
  }

  //   componentDidMount() {
  //     this.search();
  //   }

  updateArtistQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.query}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => this.setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message));
        }
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <input
          className="input-field"
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for and Artist..."
        />
        <button onClick={this.searchArtist}>Search</button>

        <div className="Profile">
          <Artist artist={this.state.artist} />
        </div>
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}
export default App;
